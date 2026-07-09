package com.leetrends.backend.dress.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DressResponse {

    private Long id;
    private String name;
    private String category;
    private Double price;
    private String description;
    private String fabric;
    private String color;
    private String size;
    private String occasion;
    private String imageUrl;
    private Boolean featured;
    private Boolean available;

}