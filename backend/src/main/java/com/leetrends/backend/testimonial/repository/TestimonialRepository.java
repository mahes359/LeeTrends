package com.leetrends.backend.testimonial.repository;

import com.leetrends.backend.testimonial.entity.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
    List<Testimonial> findByVisibleTrueOrderByCreatedAtDesc();
}
