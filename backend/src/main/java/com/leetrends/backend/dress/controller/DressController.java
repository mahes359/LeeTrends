package com.leetrends.backend.dress.controller;

import com.leetrends.backend.dress.dto.DressRequest;
import com.leetrends.backend.dress.dto.DressResponse;
import com.leetrends.backend.dress.entity.Dress;
import com.leetrends.backend.dress.service.DressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/dresses")
@RequiredArgsConstructor
@CrossOrigin("*")
public class DressController {

    private final DressService service;

    @GetMapping
    public List<DressResponse> getAll() {
        return service.getAll();
    }

    @GetMapping("/featured")
    public List<DressResponse> featured() {
        return service.getFeatured();
    }

    @GetMapping("/{id}")
    public Dress getOne(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Dress create(
            @ModelAttribute DressRequest dress,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) throws Exception {
        return service.create(dress, image);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Dress updateDress(
            @PathVariable Long id,
            @ModelAttribute DressRequest request,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) throws Exception {
        return service.update(id, request, image);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) throws Exception {

        service.delete(id);

    }

}