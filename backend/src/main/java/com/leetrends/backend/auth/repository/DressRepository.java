package com.leetrends.backend.repository;

import com.leetrends.backend.model.Dress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DressRepository extends JpaRepository<Dress, Long> {
    List<Dress> findByFeaturedTrue();
}