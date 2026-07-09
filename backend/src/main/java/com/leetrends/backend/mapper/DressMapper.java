package com.leetrends.backend.mapper;

import com.leetrends.backend.dress.dto.DressResponse;
import com.leetrends.backend.dress.entity.Dress;
import org.springframework.stereotype.Component;

@Component
public class DressMapper {

    public DressResponse toResponse(Dress dress) {

        return DressResponse.builder()
                .id(dress.getId())
                .name(dress.getName())
                .category(dress.getCategory())
                .price(dress.getPrice())
                .description(dress.getDescription())
                .fabric(dress.getFabric())
                .color(dress.getColor())
                .size(dress.getSize())
                .occasion(dress.getOccasion())
                .imageUrl(dress.getImageUrl())
                .featured(dress.getFeatured())
                .available(dress.getAvailable())
                .build();

    }

}