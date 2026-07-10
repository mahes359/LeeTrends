package com.leetrends.backend.testimonial.dto;

import lombok.Data;

@Data
public class TestimonialRequest {
    private String name;
    private String role;
    private String text;
    private Integer rating;
    private Boolean visible;
}
