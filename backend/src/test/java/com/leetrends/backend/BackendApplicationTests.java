package com.leetrends.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
		"spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1",
		"spring.datasource.username=sa",
		"spring.datasource.password=",
		"spring.datasource.driver-class-name=org.h2.Driver",
		"spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect",
		"cloudinary.cloud-name=test",
		"cloudinary.api-key=test",
		"cloudinary.api-secret=test",
		"jwt.secret=test-secret-key-for-context-test-1234567890",
		"allowed.origins=http://localhost:5173"
})
class BackendApplicationTests {

	@Test
	void contextLoads() {
	}

}
