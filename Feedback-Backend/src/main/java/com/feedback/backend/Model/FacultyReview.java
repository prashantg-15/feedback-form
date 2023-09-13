package com.feedback.backend.Model;


public class FacultyReview {
    Integer id;
	private long ucid;
	private Integer q1;
	private Integer q2;
	private Integer q3;
	private Integer q4;
	private Integer q5;
	private Integer q6;
	private Integer q7;
	private Integer q8;
	private Integer q9;
	private Integer q10;
	private String q11;
	private String faculty;
	private String feedBackSentiment;
	private Integer positive_percentage;
	private Integer negative_percentage;
	private Integer neutral_percentage;
	private String className;
	private String subject;
	public String getClassName() {
		return className;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public void setClassName(String class_name) {
		this.className = class_name;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public long getUcid() {
		return ucid;
	}
	public void setUcid(long ucid) {
		this.ucid = ucid;
	}
	public Integer getQ1() {
		return q1;
	}
	public void setQ1(Integer q1) {
		this.q1 = q1;
	}
	public Integer getQ2() {
		return q2;
	}
	public void setQ2(Integer q2) {
		this.q2 = q2;
	}
	public Integer getQ3() {
		return q3;
	}
	public void setQ3(Integer q3) {
		this.q3 = q3;
	}
	public Integer getQ4() {
		return q4;
	}
	public void setQ4(Integer q4) {
		this.q4 = q4;
	}
	public Integer getQ5() {
		return q5;
	}
	public void setQ5(Integer q5) {
		this.q5 = q5;
	}
	public Integer getQ6() {
		return q6;
	}
	public void setQ6(Integer q6) {
		this.q6 = q6;
	}
	public Integer getQ7() {
		return q7;
	}
	public void setQ7(Integer q7) {
		this.q7 = q7;
	}
	public Integer getQ8() {
		return q8;
	}
	public void setQ8(Integer q8) {
		this.q8 = q8;
	}
	public Integer getQ9() {
		return q9;
	}
	public void setQ9(Integer q9) {
		this.q9 = q9;
	}
	public Integer getQ10() {
		return q10;
	}
	public void setQ10(Integer q10) {
		this.q10 = q10;
	}
	public String getQ11() {
		return q11;
	}
	public void setQ11(String q11) {
		this.q11 = q11;
	}
	public String getFaculty() {
		return faculty;
	}
	public void setFaculty(String faculty) {
		this.faculty = faculty;
	}
	public String getFeedBackSentiment() {
		return feedBackSentiment;
	}
	public void setFeedBackSentiment(String feedBackSentiment) {
		this.feedBackSentiment = feedBackSentiment;
	}
	public Integer getPositive_percentage() {
		return positive_percentage;
	}
	public void setPositive_percentage(Integer positive_percentage) {
		this.positive_percentage = positive_percentage;
	}
	public Integer getNegative_percentage() {
		return negative_percentage;
	}
	public void setNegative_percentage(Integer negative_percentage) {
		this.negative_percentage = negative_percentage;
	}
	public Integer getNeutral_percentage() {
		return neutral_percentage;
	}
	public void setNeutral_percentage(Integer neutral_percentage) {
		this.neutral_percentage = neutral_percentage;
	}

}
