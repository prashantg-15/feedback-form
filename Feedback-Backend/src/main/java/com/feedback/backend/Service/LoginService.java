package com.feedback.backend.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.feedback.backend.Model.Login;

@Service
public class LoginService {
	@Value("${spring.datasource.url}")
	String url;
	@Value("${spring.datasource.password}")
	String password;
	@Value("${spring.datasource.username}")
	String user;

	public String validateCredentials(Login loginCredentials) throws ClassNotFoundException {
		String query = "SELECT * FROM LoginDetails where username=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement statement = connection.createStatement();
				PreparedStatement stmt = connection.prepareStatement(query);) {
			stmt.setString(1, loginCredentials.getUsername());
			ResultSet resultSet = stmt.executeQuery();
			while (resultSet.next()) {
				if (resultSet.getString("password").equals(loginCredentials.getPassword())) {
					return "success";
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return "fail";
	}

}
