package com.feedback.backend.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.feedback.backend.Model.FacultyReview;
import com.feedback.backend.Model.FacultySubjects;
import com.feedback.backend.Model.SentimentAnalysisRequest;

@Service
public class FacultyReviewService {

	@Value("${spring.datasource.url}")
	String url;
	@Value("${spring.datasource.password}")
	String password;
	@Value("${spring.datasource.user}")
	String user;
	public String addReviewService(List<FacultyReview> facultyReviewList)throws ClassNotFoundException, IOException, InterruptedException {
		int flag=0;
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection conn;
		try {
			conn = DriverManager.getConnection(url, user, password);

			String query= "INSERT INTO FeedbackProject.FacultyReview(ucid,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,faculty,class_name,FeedBackSentiment,"
					+ "positive_percentage,negative_percentage,neutral_percentage)VALUES"
					+ "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
			for(FacultyReview facultyReview:facultyReviewList) {
				// System.out.println(facultyReview.get());
				JSONObject jsonObject =analyzeSentiment(facultyReview.getQ11());
				System.out.println(jsonObject.get("pos"));
				double neg = jsonObject.getDouble("neg");
				double neu = jsonObject.getDouble("neu");
				double pos = jsonObject.getDouble("pos");
				String sentiment="";
				if (neg > pos && neg > neu)
					sentiment= "Negative Sentiment";
				else if(neg < pos && pos > neu)
					sentiment= "Positive Sentiment";
				else
					sentiment= "Neutral Sentiment";
				System.out.println(facultyReview.getQ11());
				PreparedStatement pst= conn.prepareStatement(query);
				pst.setLong(1, facultyReview.getUcid());
				pst.setInt(2, facultyReview.getQ1());
				pst.setInt(3, facultyReview.getQ2());
				pst.setInt(4, facultyReview.getQ3());
				pst.setInt(5, facultyReview.getQ4());
				pst.setInt(6, facultyReview.getQ5());
				pst.setInt(7, facultyReview.getQ6());
				pst.setInt(8, facultyReview.getQ7());
				pst.setInt(9, facultyReview.getQ8());
				pst.setInt(10, facultyReview.getQ9());
				pst.setInt(11, facultyReview.getQ10());
				pst.setNString(12, facultyReview.getQ11());
				pst.setNString(13, facultyReview.getFaculty());
				pst.setNString(14, facultyReview.getClass_name());
				pst.setNString(15, sentiment);
				pst.setDouble(16, pos*100);
				pst.setDouble(17, neg*100);
				pst.setDouble(18, neu*100);
				flag=pst.executeUpdate();
			}
			System.out.println(flag);
			if(flag==1) {
				return "feedback added successfully";
			}
		}
		catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return " feedback did not added successfully";
	}

	public JSONObject analyzeSentiment(String request) throws IOException, InterruptedException {
		String pythonScriptPath = "C:/FinalYearProject/feedback-form/pythonProject/main.py"; // Update with actual path
		String inputText = request;
		String[] command = {"python", pythonScriptPath, inputText};
		ProcessBuilder processBuilder = new ProcessBuilder(command);
		processBuilder.redirectErrorStream(true);
		Process process = processBuilder.start();
		StringBuilder output = new StringBuilder(); 
		try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
			String line;
			while ((line = reader.readLine()) != null) {
				output.append(line).append("\n");
			}
		}
		int exitCode = process.waitFor();
		System.out.println(output.toString());
		// pasring it to json
		JSONObject jsonObject = new JSONObject(output.toString());

		System.out.println(jsonObject);
		return jsonObject;
	}

	public List<FacultySubjects> getFacultySubjectsService(String className) {
	    List<FacultySubjects> facultySubjectsList = new ArrayList<>();
	    String query = "SELECT * FROM FeedbackProject.FacultySubjects WHERE className LIKE ?";	    
	    try (Connection conn = DriverManager.getConnection(url, user, password);
	         PreparedStatement pst = conn.prepareStatement(query)) {	        
	        pst.setString(1, "%" + className + "%");
	        try (ResultSet rs = pst.executeQuery()) {
	            while (rs.next()) {
	                FacultySubjects facultySubject = new FacultySubjects();
	                facultySubject.setId(rs.getInt("id"));
	                facultySubject.setClassName(className);
	                facultySubject.setFaculty_name(rs.getString("faculty_Name"));
	                facultySubject.setSubject(rs.getString("subject"));
	                facultySubject.setIsElective(rs.getInt("isElective"));
	                facultySubjectsList.add(facultySubject);
	            }
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    
	    return facultySubjectsList;
	}


}
