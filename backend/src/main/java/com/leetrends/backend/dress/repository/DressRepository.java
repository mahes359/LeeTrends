package com.leetrends.backend.dress.repository;

import com.leetrends.backend.dress.entity.Dress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DressRepository extends JpaRepository<Dress, Long> {

    List<Dress> findByFeaturedTrue();

    List<Dress> findByCategoryIgnoreCase(String category);

}