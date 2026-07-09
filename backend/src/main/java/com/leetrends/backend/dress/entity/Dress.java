package com.leetrends.backend.dress.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "dress")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Dress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private Double price;

    @Column(length = 5000)
    private String description;

    private String fabric;

    private String color;

    private String size;

    private String occasion;

    private String imageUrl;

    private String cloudinaryId;

    @Builder.Default
    private Boolean featured = false;

    @Builder.Default
    private Boolean available = true;

    private LocalDateTime createdAt;

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
    }

}