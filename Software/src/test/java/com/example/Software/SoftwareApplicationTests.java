package com.example.Software;

import org.apache.commons.text.similarity.LevenshteinDistance;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SoftwareApplicationTests {
	public static void main(String[] args) {
		String str1 = "Dunk Low 'Concord";
		String str2 = "Dunk Low Premium 'Urban Landscape 2.0";
		int distance = LevenshteinDistance.getDefaultInstance().apply(str1, str2);
		System.out.println("Levenshtein Distance: " + distance);
	}
}
