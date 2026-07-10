package com.leetrends.backend.dress.service;

import com.leetrends.backend.cloudinary.ImageService;
import com.leetrends.backend.dress.dto.DressRequest;
import com.leetrends.backend.dress.dto.DressResponse;
import com.leetrends.backend.dress.entity.Dress;
import com.leetrends.backend.dress.repository.DressRepository;
import com.leetrends.backend.exception.ResourceNotFoundException;
import com.leetrends.backend.mapper.DressMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DressService {

    private final DressRepository repository;
    private final ImageService imageService;
    private final DressMapper mapper;

    public List<DressResponse> getAll() {

        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();

    }

    public List<DressResponse> getFeatured() {

        return repository.findByFeaturedTrue()
                .stream()
                .map(mapper::toResponse)
                .toList();

    }
    public Dress update(
            Long id,
            DressRequest request,
            MultipartFile image
    ) throws Exception {

        Dress dress = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dress not found with id: " + id));

        dress.setName(request.getName());
        dress.setCategory(request.getCategory());
        dress.setPrice(request.getPrice());
        dress.setDescription(request.getDescription());
        dress.setFabric(request.getFabric());
        dress.setColor(request.getColor());
        dress.setSize(request.getSize());
        dress.setOccasion(request.getOccasion());
        dress.setFeatured(request.getFeatured() != null ? request.getFeatured() : false);
        dress.setAvailable(request.getAvailable() != null ? request.getAvailable() : true);

        if (image != null && !image.isEmpty()) {

            if (dress.getCloudinaryId() != null) {
                imageService.deleteImage(dress.getCloudinaryId());
            }

            Map<String, Object> upload = imageService.upload(image);

            dress.setImageUrl(upload.get("secure_url").toString());
            dress.setCloudinaryId(upload.get("public_id").toString());

        }

        return repository.save(dress);
    }

    public void delete(Long id) throws Exception {

        Dress dress = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dress not found with id: " + id));

        if (dress.getCloudinaryId() != null) {
            imageService.deleteImage(dress.getCloudinaryId());
        }

        repository.delete(dress);

    }

    public Dress getById(Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dress not found with id: " + id));

    }

    public Dress create(DressRequest request,
                        MultipartFile image) throws Exception {

        if (image == null || image.isEmpty()) {
            throw new IllegalArgumentException("An image is required to create a dress");
        }

        Map<String, Object> upload = imageService.upload(image);

        Dress dress = Dress.builder()
                .name(request.getName())
                .category(request.getCategory())
                .price(request.getPrice())
                .description(request.getDescription())
                .fabric(request.getFabric())
                .color(request.getColor())
                .size(request.getSize())
                .occasion(request.getOccasion())
                .featured(request.getFeatured() != null ? request.getFeatured() : false)
                .available(request.getAvailable() != null ? request.getAvailable() : true)
                .imageUrl(upload.get("secure_url").toString())
                .cloudinaryId(upload.get("public_id").toString())
                .build();

        return repository.save(dress);

    }

}