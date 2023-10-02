package com.feedback.backend.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.backend.Model.Login;

import com.feedback.backend.Service.LoginService;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {

	@Autowired
	LoginService loginService;

	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> postFacultyReview(@RequestBody Login loginCredentials)
			throws ClassNotFoundException {
		String result = loginService.validateCredentials(loginCredentials);
		Map<String, String> response = new HashMap<>();
		response.put("result", result);
		return ResponseEntity.ok(response);

	}
}
