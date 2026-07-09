package com.leetrends.backend.auth.service;

import com.leetrends.backend.auth.dto.LoginRequest;
import com.leetrends.backend.auth.dto.LoginResponse;
import com.leetrends.backend.auth.dto.RegisterRequest;
import com.leetrends.backend.auth.entity.User;
import com.leetrends.backend.auth.repository.UserRepository;
import com.leetrends.backend.auth.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public String register(RegisterRequest request) {

        if (repository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role("ADMIN")
                .build();

        repository.save(user);

        return "Registration Successful";
    }

    public LoginResponse login(LoginRequest request) {

        User user = repository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new BadCredentialsException("Invalid Email"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid Password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(token);
    }
}