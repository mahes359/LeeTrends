package com.leetrends.backend.auth.controller;

import com.leetrends.backend.auth.dto.LoginRequest;
import com.leetrends.backend.auth.dto.LoginResponse;
import com.leetrends.backend.auth.dto.RegisterRequest;
import com.leetrends.backend.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}