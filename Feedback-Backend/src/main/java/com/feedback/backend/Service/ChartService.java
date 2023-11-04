package com.feedback.backend.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

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
		Map<String, List<Map<String, String>>> ratingMapLev1 = null;
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
			}
			
			// Adding Sentiments [Q11]
			List<Map<String, String>> ratingListLev2 = new ArrayList<Map<String, String>>();
			String query1 = "SELECT COUNT(FeedBackSentiment) AS sentiment FROM FacultyReview WHERE "
						  + "subject=? AND faculty=? AND FeedBackSentiment=?";
			String[] sentiments = {"positive", "negative", "neutral"};
			for(int i=0; i<sentiments.length; i++) {
				PreparedStatement stmt = connection.prepareStatement(query1);
				stmt.setString(1, subjectName);
				stmt.setString(2, facultyName);
				stmt.setString(3, sentiments[i]);
				ResultSet resultSet = stmt.executeQuery();
				while (resultSet.next()) {
					Map<String, String> ratingMap2 = new HashMap<String, String>();
					ratingMap2.put(sentiments[i], Integer.toString(resultSet.getInt("sentiment")));
					ratingListLev2.add(ratingMap2);
				}
			}
			ratingMapLev1.put("sentiments", ratingListLev2);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ratingMapLev1;
	}

	public List<Map<String, String>> getChartDataFacultyService(String facultyUsername) throws ClassNotFoundException {
		
		String query = "SELECT name FROM LoginDetails WHERE username=?";
		String query1 = "select * from FacultyReview where faculty=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		List<Map<String, String>> subjectsList = new ArrayList<Map<String, String>>();
		String facultyName = "";
		
		try (Connection connection = DriverManager.getConnection(url, user, password);
				PreparedStatement stmt = connection.prepareStatement(query);) {
			stmt.setString(1, facultyUsername);
			ResultSet res = stmt.executeQuery();
			while(res.next()) {
				facultyName = res.getString("name");
			}
			
			try (PreparedStatement pstm = connection.prepareStatement(query1);) {
				pstm.setString(1, facultyName);
				ResultSet result = pstm.executeQuery();
				Set<String> uniqueSubjects = new HashSet<String>();
				while (result.next()) {
					String subject = result.getString("subject");
					if(!uniqueSubjects.contains(subject)) {
						Map<String, String> subjectsMap = new HashMap<String, String>();
						subjectsMap.put("name", subject);
						subjectsList.add(subjectsMap);
						uniqueSubjects.add(subject);
					}
				}
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return subjectsList;
	}
}