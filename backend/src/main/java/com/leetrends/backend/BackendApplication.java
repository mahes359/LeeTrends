package com.leetrends.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.leetrends.backend.auth.entity.User;
import com.leetrends.backend.auth.repository.UserRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner seedAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			if (userRepository.findByEmail("admin@leetrends.com").isEmpty()) {
				User admin = User.builder()
						.email("admin@leetrends.com")
						.password(passwordEncoder.encode("admin123"))
						.role("ADMIN")
						.build();
				userRepository.save(admin);
			}
		};
	}

}
