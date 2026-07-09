package com.leetrends.backend.dress.dto;

import lombok.Data;

@Data
public class DressRequest {

    private String name;
    private String category;
    private Double price;
    private String description;
    private String fabric;
    private String color;
    private String size;
    private String occasion;
    private Boolean featured;
    private Boolean available;

}