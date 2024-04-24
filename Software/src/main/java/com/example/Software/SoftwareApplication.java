package com.example.Software;

import com.example.Software.action.PointContainer;
import com.example.Software.action.ProductContainer;
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
public class SoftwareApplication implements CommandLineRunner {
	private JwtAuthenticationFilter jwtAuthenticationFilter;
	UserPointService userPointService;
	ProductService productService;

	public static void main(String[] args) {
		SpringApplication.run(SoftwareApplication.class, args);
	}

	public void run(String... args) throws Exception {
		PointContainer.init(userPointService);
		ProductContainer.init(productService);
	}

}
