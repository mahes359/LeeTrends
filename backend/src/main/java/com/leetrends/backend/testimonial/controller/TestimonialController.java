package com.leetrends.backend.testimonial.controller;

import com.leetrends.backend.testimonial.dto.TestimonialRequest;
import com.leetrends.backend.testimonial.entity.Testimonial;
import com.leetrends.backend.testimonial.repository.TestimonialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
@RequiredArgsConstructor
@CrossOrigin("*")
public class TestimonialController {

    private final TestimonialRepository repository;

    @GetMapping
    public List<Testimonial> getVisible() {
        return repository.findByVisibleTrueOrderByCreatedAtDesc();
    }

    @GetMapping("/all")
    public List<Testimonial> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Testimonial create(@RequestBody TestimonialRequest req) {
        return repository.save(Testimonial.builder()
                .name(req.getName())
                .role(req.getRole())
                .text(req.getText())
                .rating(req.getRating() != null ? req.getRating() : 5)
                .visible(req.getVisible() != null ? req.getVisible() : true)
                .build());
    }

    @PutMapping("/{id}")
    public Testimonial update(@PathVariable Long id, @RequestBody TestimonialRequest req) {
        Testimonial t = repository.findById(id).orElseThrow();
        t.setName(req.getName());
        t.setRole(req.getRole());
        t.setText(req.getText());
        t.setRating(req.getRating() != null ? req.getRating() : t.getRating());
        t.setVisible(req.getVisible() != null ? req.getVisible() : t.getVisible());
        return repository.save(t);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
