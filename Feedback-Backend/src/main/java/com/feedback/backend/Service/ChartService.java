package com.feedback.backend.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ChartService {
	@Value("${spring.datasource.url}")
	String url;
	@Value("${spring.datasource.password}")
	String password;
	@Value("${spring.datasource.username}")
	String user;

	public Map<String, List<Map<String, String>>> getChartDataService(String facultyName, String subjectName)
			throws ClassNotFoundException {
	//	List<Map<String, List<Map<String, String>>>> ratingListLev1 = new ArrayList<Map<String, List<Map<String, String>>>>();
	//	Map<String, List<Map<String, String>>> ratingListLev1 = new HashMap<String, List<Map<String, String>>>();
		Map<String, List<Map<String, String>>> ratingMapLev1=null;
		Class.forName("com.mysql.cj.jdbc.Driver");
		int counterStars = 1;
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement statement = connection.createStatement();) {
			ratingMapLev1 = new HashMap<String, List<Map<String, String>>>();
			for (int i = 1; i <= 10; i++) {
				counterStars = 1;
				
				List<Map<String, String>> ratingListLev2 = new ArrayList<Map<String, String>>();
				while (counterStars <= 5) {
					String query = "SELECT sum(q1) as starSum FROM FacultyReview WHERE subject=? AND faculty=? AND q"
							+ i + "=?";
					PreparedStatement stmt = connection.prepareStatement(query);
					stmt.setString(1, subjectName);
					stmt.setString(2, facultyName);
					stmt.setInt(3, counterStars);
					ResultSet resultSet = stmt.executeQuery();
					while (resultSet.next()) {
						Map<String, String> ratingMap2 = new HashMap<String, String>();
						ratingMap2.put("stars", counterStars + " Star");
						ratingMap2.put("rating", Integer.toString(resultSet.getInt("starSum")));
						ratingListLev2.add(ratingMap2);
					}
					counterStars++;
				}
				ratingMapLev1.put("q" + i, ratingListLev2);
//				ratingListLev1.add(ratingMapLev1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ratingMapLev1;
	}

	public List<Map<String, String>> getChartDataFacultyService(String facultyName) throws ClassNotFoundException {
		String query = "select * from FacultyReview where faculty=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		List<Map<String, String>> subjectsList = new ArrayList<Map<String, String>>();
		try (Connection connection = DriverManager.getConnection(url, user, password);
				PreparedStatement stmt = connection.prepareStatement(query);) {
			stmt.setString(1, facultyName);
			ResultSet result = stmt.executeQuery();
			while (result.next()) {
				Map<String, String> subjectsMap = new HashMap<String, String>();
				subjectsMap.put("name", result.getString("subject"));
				subjectsList.add(subjectsMap);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return subjectsList;
	}
}