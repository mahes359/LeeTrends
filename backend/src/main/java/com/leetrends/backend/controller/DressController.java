package com.leetrends.backend.dress.controller;

import com.leetrends.backend.dress.model.Dress;
import com.leetrends.backend.service.DressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/dresses")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DressController {

    private final DressService service;

    @GetMapping
    public List<Dress> getAll() {
        return service.getAllDresses();
    }
    @GetMapping("/featured")
    public List<Dress> featured() {
        return service.getFeaturedDresses();
    }
    @GetMapping("/{id}")
    public Dress getOne(@PathVariable Long id) {
        return service.getDress(id);
    }
    @PutMapping(value="/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Dress updateDress(

            @PathVariable Long id,

            @RequestParam String name,
            @RequestParam String category,
            @RequestParam Double price,
            @RequestParam String description,
            @RequestParam String fabric,
            @RequestParam String color,
            @RequestParam String size,
            @RequestParam String occasion,
            @RequestParam Boolean featured,
            @RequestParam Boolean available,

            @RequestParam(required = false) MultipartFile image

    ) throws Exception {

        return service.updateDress(
                id,
                name,
                category,
                price,
                description,
                fabric,
                color,
                size,
                occasion,
                featured,
                available,
                image
        );

    }
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Dress uploadDress(
            @RequestParam String name,
            @RequestParam String category,
            @RequestParam Double price,
            @RequestParam String description,
            @RequestParam String fabric,
            @RequestParam String color,
            @RequestParam String size,
            @RequestParam String occasion,
            @RequestParam Boolean featured,
            @RequestParam Boolean available,
            @RequestParam MultipartFile image
    ) throws Exception {

        return service.createDress(
                name,
                category,
                price,
                description,
                fabric,
                color,
                size,
                occasion,
                featured,
                available,
                image
        );
    }

    @PostMapping
    public Dress create(@RequestBody Dress dress) {
        return service.saveDress(dress);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) throws Exception {
        service.deleteDress(id);
    }

}