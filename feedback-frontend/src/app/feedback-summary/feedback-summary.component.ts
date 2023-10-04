import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../services/restAPI/chart-service.service';
import Chart from 'chart.js/auto';
import { SelectItem } from "primeng/api";
import { FacultyService } from '../services/restAPI/faculty-service.service';

interface Subject {
  name: string;
}

@Component({
  selector: 'app-feedback-summary',
  templateUrl: './feedback-summary.component.html',
  styleUrls: ['./feedback-summary.component.scss']
})
export class FeedbackSummaryComponent {

  subject: Subject[] | undefined;
  selectedSubject: string = '';

  chart: any = [];
  backgroundColor: any = ['#FAB06F', '#FF505D', '#15CEAE', '#45AFFF', '#FFE85F'];
  feedback: any = {};

  feedbackTitle: any = [];
  // Create an array of question keys from "q1" to "q10"
  questions: any = ['q1Chart', 'q2Chart', 'q3Chart', 'q4Chart', 'q5Chart', 'q6Chart', 'q7Chart', 'q8Chart', 'q9Chart', 'q10Chart'];

  constructor(private facultyService: FacultyService) { }

  ngOnInit() {

    this.subject = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];

    // this.getSubjects();
    this.getFeedback();
  }

  // API Call to GET Feedback
  getFeedback() {
    // this.facultyService.getFeedback('harshilKanakia', 'DSA').subscribe((data) => {
    //   this.feedback = data;
    // })

    this.facultyService.getChart().subscribe((data) => {
      this.feedback = data;
    })

    this.feedbackTitle = this.facultyService.getFeedbackTitle();
    console.log(this.feedbackTitle);
    setTimeout(() => {
      this.Charts();
    }, 1000);
  }

  // API Call to GET Subject
  getSubjects() {
    this.facultyService.getSubject('harshilKanakia').subscribe((data) => {
      this.subject = data;
    });
    this.getFeedback();
  }

  Charts() {
    // Create an array of question keys from "q1" to "q10"
    const questionKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

    // Create an array to store the generated charts
    const charts: any[] = [];

    // Iterate through the question keys and generate charts
    for (const key of questionKeys) {
      const chart = new Chart(`${key}Chart`, {
        type: 'doughnut',
        data: {
          labels: this.feedback[key].map((item: { stars: any; }) => item.stars),
          datasets: [
            {
              label: '  No. of Votes',
              data: this.feedback[key].map((item: { rating: any; }) => item.rating),
              backgroundColor: this.backgroundColor,
              borderWidth: 7,
              borderRadius: 2,
              hoverBorderWidth: 0
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
          },
          responsive: true,
        },
      });

      charts.push(chart); // Store the chart in the array
    }
    // this.chart = new Chart('q1Chart', {
    //   type: 'pie',
    //   data: {
    //     labels: this.feedback.q1.map((item: { stars: any; }) => item.stars),
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: this.feedback.q1.map((item: { rating: any; }) => item.rating),
    //         backgroundColor: this.backgroundColor,
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //     responsive: true
    //   },
    // });
  }
}
