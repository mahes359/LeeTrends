package com.leetrends.backend.cloudinary;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class ImageService {

    private final Cloudinary cloudinary;

    public Map<String, Object> upload(MultipartFile image) throws Exception {

        return cloudinary.uploader().upload(
                image.getBytes(),
                ObjectUtils.emptyMap()
        );

    }

    public void deleteImage(String publicId) throws Exception {

        cloudinary.uploader().destroy(
                publicId,
                ObjectUtils.emptyMap()
        );

    }

}