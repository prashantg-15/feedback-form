package com.feedback.backend.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.backend.Service.ChartService;

@RestController
@CrossOrigin(origins = "*")
public class ChartController {

	@Autowired
	ChartService chartService;

	@GetMapping("/feedbackSummary/{facultyName}/{subjectName}")
	public Map<String, List<Map<String, String>>> getChartData(@PathVariable String facultyName,
			@PathVariable String subjectName) throws ClassNotFoundException {

		Map<String, List<Map<String, String>>> response = chartService.getChartDataService(facultyName,
				subjectName);
		return response;

	}

	@GetMapping("/feedbackSummary/{facultyName}")
	public List<Map<String, String>>  getChartDataFaculty(@PathVariable String facultyName) throws ClassNotFoundException {

		List<Map<String, String>>  response = chartService.getChartDataFacultyService(facultyName);
		return response;

	}
}
