package com.example.Software;

import com.example.Software.configuration.filter.JwtAuthenticationFilter;
import com.example.Software.model.Product;
import com.example.Software.service.product.ProductService;
import com.example.Software.service.user.UserPointService;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class SoftwareApplication {
	private JwtAuthenticationFilter jwtAuthenticationFilter;
	UserPointService userPointService;
	ProductService productService;

	public static void main(String[] args) {
		SpringApplication.run(SoftwareApplication.class, args);
	}

}
