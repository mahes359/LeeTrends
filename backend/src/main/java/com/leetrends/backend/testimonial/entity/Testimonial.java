package com.leetrends.backend.testimonial.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "testimonial")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Testimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String role;

    @Column(length = 1000, nullable = false)
    private String text;

    @Builder.Default
    private Integer rating = 5;

    @Builder.Default
    private Boolean visible = true;

    private LocalDateTime createdAt;

    @PrePersist
    public void onCreate() { createdAt = LocalDateTime.now(); }
}
