package com.leetrends.backend.validation;

public class ValidationUtil {

    public static boolean isNullOrBlank(String value) {
        return value == null || value.isBlank();
    }

    public static void requireNonBlank(String value, String fieldName) {
        if (isNullOrBlank(value)) {
            throw new IllegalArgumentException(fieldName + " must not be blank");
        }
    }
}
