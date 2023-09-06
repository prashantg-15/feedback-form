package com.feedback.backend.Controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;

import com.feedback.backend.Model.SentimentAnalysisRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.json.JSONObject;

@RestController
public class SentimentAnalysisController {
	@GetMapping("/test")
	public String tseting() {
		return "working fine";
	}
	 @PostMapping("/analyze-sentiment")
	    public String analyzeSentiment(@RequestBody SentimentAnalysisRequest request) throws IOException, InterruptedException {
	        String pythonScriptPath = "C:/FinalYearProject/feedback-form/pythonProject/main.py"; // Update with actual path
	        String inputText = request.getText();
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
	        System.out.println(sentiment);
	        if (exitCode == 0) {
	            return output.toString();
	        } else {
	            return "Sentiment analysis failed";
	        }
	    }
}
