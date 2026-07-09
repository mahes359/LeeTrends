package com.leetrends.backend.dress.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "dress")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Dress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String category;

    private Double price;

    @Column(length = 5000)
    private String description;

    private String fabric;

    private String color;

    private String size;

    private String occasion;

    private String imageUrl;

    private String cloudinaryId;

    private Boolean featured;

    private Boolean available;

    private LocalDateTime createdAt;
}