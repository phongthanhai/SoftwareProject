package com.example.Software;

import com.example.Software.configuration.filter.JwtAuthenticationFilter;
import com.example.Software.service.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class SoftwareApplication {
	private JwtAuthenticationFilter jwtAuthenticationFilter;
	ProductService productService;

	public static void main(String[] args) {
		SpringApplication.run(SoftwareApplication.class, args);
	}

} 
