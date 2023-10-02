package com.feedback.backend.Controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.feedback.backend.Model.FacultySubjects;
import com.feedback.backend.Service.FacultySubjectsService;

@CrossOrigin(origins = "*")
@RestController
public class FacultySubjectController {

	@Autowired
	private FacultySubjectsService facultySubjectsService;

	@GetMapping("/getfacultySubjects")
	public List<FacultySubjects> getAllRecord() {
		List<FacultySubjects> facultySubjectsList = null;
		try {
			facultySubjectsList = facultySubjectsService.findAll();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return facultySubjectsList;
	}

	@PostMapping("/postFacultySubjects")
	public String createRecord(@RequestBody FacultySubjects facultySubjects) {
		String Result = "";
		try {
			Result = facultySubjectsService.save(facultySubjects);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return Result;
	}

	@GetMapping("/getfacultySubjects/{Id}")
	public FacultySubjects getAllRecordByString(@PathVariable Integer Id) throws ClassNotFoundException, SQLException {
		FacultySubjects facultySubjects = null;
		facultySubjects = facultySubjectsService.findById(Id);
		return facultySubjects;
	}

	@PutMapping("/getfacultySubjects/{Id}")
	public ResponseEntity<String> updateRecord(@PathVariable Integer Id,
			@RequestBody FacultySubjects facultySubjectsdetails) throws ClassNotFoundException, SQLException {
		FacultySubjects facultySubjects = facultySubjectsService.findById(Id);

		facultySubjects.setClassName(facultySubjectsdetails.getClassName());
		facultySubjects.setFaculty_name(facultySubjectsdetails.getFaculty_name());
		facultySubjects.setIsElective(facultySubjectsdetails.getIsElective());
		facultySubjects.setSubject(facultySubjectsdetails.getSubject());

		String updatedEmployee = facultySubjectsService.save(facultySubjects);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/delfacultySubjects/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteRecord(@PathVariable Integer id)
			throws ClassNotFoundException, SQLException {
		FacultySubjects facultySubjects = facultySubjectsService.findById(id);
		facultySubjectsService.delete(facultySubjects);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
