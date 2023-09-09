package com.feedback.backend.Model;

public class FacultySubjects {
	Integer id;
	private String className;
	private String faculty_name;
	private String subject;
	private int isElective;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getFaculty_name() {
		return faculty_name;
	}
	public void setFaculty_name(String faculty_name) {
		this.faculty_name = faculty_name;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public int getIsElective() {
		return isElective;
	}
	public void setIsElective(int isElective) {
		this.isElective = isElective;
	}

}
