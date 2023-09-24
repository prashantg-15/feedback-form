package com.feedback.backend.Controller;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.backend.Model.FacultyReview;
import com.feedback.backend.Model.FacultySubjects;
import com.feedback.backend.Service.FacultyReviewService;

@RestController
@CrossOrigin(origins = "*")
public class FeedbackController {

	@Autowired
	FacultyReviewService facultyReviewService;
	@PostMapping("/facultyReview")
	public String postFacultyReview(@RequestBody List<FacultyReview> facultyReviewList) throws ClassNotFoundException {
		String result="";
		try {
			result=facultyReviewService.addReviewService(facultyReviewList);
		} catch (ClassNotFoundException | IOException | InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		return result;
	}
	@GetMapping("/facultySubjects/{className}")
	public List<FacultySubjects> getFacultySubjects(@PathVariable String className)  {
		return facultyReviewService.getFacultySubjectsService(className);

	}
}
