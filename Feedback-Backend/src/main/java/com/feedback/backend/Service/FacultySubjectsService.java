package com.feedback.backend.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.feedback.backend.Model.FacultySubjects;

@Service
public class FacultySubjectsService {

	@Value("${spring.datasource.url}")
	String url;
	@Value("${spring.datasource.password}")
	String password;
	@Value("${spring.datasource.username}")
	String user;

	public List<FacultySubjects> findAll() throws ClassNotFoundException {
		List<FacultySubjects> facultySubjectsList = new ArrayList<>();
		String query = "SELECT * FROM FacultySubjects";
		Class.forName("com.mysql.cj.jdbc.Driver");
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement statement = connection.createStatement();
				ResultSet resultSet = statement.executeQuery(query)) {

			while (resultSet.next()) {
				FacultySubjects facultySubject = new FacultySubjects();
				facultySubject.setId(resultSet.getInt("id"));
				facultySubject.setClassName(resultSet.getString("className"));
				facultySubject.setFaculty_name(resultSet.getString("faculty_name"));
				facultySubject.setSubject(resultSet.getString("subject"));
				facultySubject.setIsElective(resultSet.getString("isElective"));
				facultySubjectsList.add(facultySubject);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return facultySubjectsList;
	}

	public String save(FacultySubjects facultySubjects) throws ClassNotFoundException {
		String query = "INSERT INTO FeedbackProject.FacultySubjects(className, faculty_name,subject,isElective)VALUES(?,?,?,?);";
		Class.forName("com.mysql.cj.jdbc.Driver");
		int result = 0;
		try (Connection connection = DriverManager.getConnection(url, user, password);
				PreparedStatement stmt = connection.prepareStatement(query);) {
			stmt.setString(1, facultySubjects.getClassName());
			stmt.setString(2, facultySubjects.getFaculty_name());
			stmt.setString(3, facultySubjects.getSubject());
			stmt.setString(4, facultySubjects.getIsElective());
			result = stmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		if (result == 1) {
			return "Inserted Successfully";
		}
		return "Not Inserted";
	}
	
	public String update(FacultySubjects facultySubjects, Integer Id) throws ClassNotFoundException {
	    String query = "UPDATE FeedbackProject.FacultySubjects " +
	                   "SET className=?, faculty_name=?, subject=?, isElective=? " +
	                   "WHERE id=?";

	    Class.forName("com.mysql.cj.jdbc.Driver");
	    int result = 0;

	    try (Connection connection = DriverManager.getConnection(url, user, password);
	         PreparedStatement stmt = connection.prepareStatement(query);) {
	        stmt.setString(1, facultySubjects.getClassName());
	        stmt.setString(2, facultySubjects.getFaculty_name());
	        stmt.setString(3, facultySubjects.getSubject());
	        stmt.setString(4, facultySubjects.getIsElective());
	        stmt.setInt(5, Id); // Assuming 'id' is an int

	        result = stmt.executeUpdate();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }

	    if (result == 1) {
	        return "Updated Successfully";
	    } else {
	        return "Not Updated";
	    }
	}


	public boolean delete(FacultySubjects facultySubjects) throws ClassNotFoundException, SQLException {
		String query = "Delete FROM FacultySubjects where id=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement statement = connection.createStatement();
				PreparedStatement stmt = connection.prepareStatement(query);) {
			stmt.setInt(1, facultySubjects.getId());
			return stmt.execute();
		}
	}

	public FacultySubjects findByString(String searchString) throws ClassNotFoundException {
		List<FacultySubjects> facultySubjectsList = new ArrayList<>();
		//int result = 0;
		String query = "SELECT * FROM FacultySubjects where className=? or faculty_name=? or subject=? or isElective=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement statement = connection.createStatement();
				PreparedStatement stmt = connection.prepareStatement(query);) {
			stmt.setString(1, searchString);
			stmt.setString(2, searchString);
			stmt.setString(3, searchString);
			stmt.setString(4, searchString);
			ResultSet resultSet= stmt.executeQuery();
			while (resultSet.next()) {
				FacultySubjects facultySubject = new FacultySubjects();
				facultySubject.setId(resultSet.getInt("id"));
				facultySubject.setClassName(resultSet.getString("className"));
				facultySubject.setFaculty_name(resultSet.getString("faculty_name"));
				facultySubject.setSubject(resultSet.getString("subject"));
				facultySubject.setIsElective(resultSet.getString("isElective"));
				facultySubjectsList.add(facultySubject);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		//return facultySubjectsList;
		return null;
	}

	public FacultySubjects findById(Integer Id) throws ClassNotFoundException, SQLException {
		String query = "SELECT * FROM FacultySubjects where id=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement statement = connection.createStatement();
				PreparedStatement stmt = connection.prepareStatement(query);) {
			stmt.setInt(1, Id);
			ResultSet resultSet= stmt.executeQuery();
			resultSet.next();
			FacultySubjects facultySubject = new FacultySubjects();
			facultySubject.setId(resultSet.getInt("id"));
			facultySubject.setClassName(resultSet.getString("className"));
			facultySubject.setFaculty_name(resultSet.getString("faculty_name"));
			facultySubject.setSubject(resultSet.getString("subject"));
			facultySubject.setIsElective(resultSet.getString("isElective"));
		return facultySubject;
	}

}
}
