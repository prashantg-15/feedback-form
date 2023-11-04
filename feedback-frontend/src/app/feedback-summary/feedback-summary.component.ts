import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../services/restAPI/chart-service.service';
import Chart from 'chart.js/auto';
import { SelectItem } from "primeng/api";
import { FacultyService } from '../services/restAPI/faculty-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  selectedSubject: any = '';

  activeIndexes: number[] = [0, 1, 2, 3, 4];

  charts: any[] = [];
  chart: any;
  chart1: any;
  backgroundColor: any = ['#FAB06F', '#FF505D', '#15CEAE', '#45AFFF', '#FFE85F'];
  feedback: any = {};

  feedbackTitle: any = [];
  // Create an array of question keys from "q1" to "q10"
  questions: any = ['q1Chart', 'q2Chart', 'q3Chart', 'q4Chart', 'q5Chart', 'q6Chart', 'q7Chart', 'q8Chart', 'q9Chart', 'q10Chart'];

  username: any;
  facultyName: any;
  loader: boolean = false;

  constructor(private facultyService: FacultyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    const sessionString = localStorage.getItem('session');
    if (sessionString !== null) {
      const sessionObject = JSON.parse(sessionString);
      this.facultyName = sessionObject.result;
    } else {
      // Handle the case where 'session' is not found in localStorage
      console.log('Item not found in localStorage');
    }

    this.route.params.subscribe(username => {
      this.username = username['faculty'];
    });

    this.feedbackTitle = this.facultyService.getFeedbackTitle();
    this.getSubjects();
    // this.getFeedback();
  }

  // API Call to GET Feedback
  getFeedback() {
    this.loader = true;
    this.facultyService.getFeedback(this.facultyName, this.selectedSubject.name).subscribe((data) => {
      this.feedback = data;
    })
    setTimeout(() => {
      this.sentimentChart();
      this.Charts();
      this.loader = false;
    }, 3000);
  }

  // API Call to GET Subject
  getSubjects() {
    this.facultyService.getSubject(this.username).subscribe((data) => {
      this.subject = data;
    });
  }

  onDropdownChange() {
    this.getFeedback();
  }

  sentimentChart() {
    const label1 = ['Positive', 'Negative', 'Neutral']
    let sentiments: any[] = [];
    sentiments = this.feedback["sentiments"].map((item: { keyy: any; }) => item)
    console.log(sentiments);

    if (this.chart1) {
      this.chart1.destroy();
    }

    this.chart1 = new Chart(`q11Chart`, {
      type: 'doughnut',
      data: {
        labels: label1,
        datasets: [
          {
            label: ' No. of Votes',
            data: sentiments.map(obj => Object.values(obj)[0]),
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
  }

  Charts() {
    // Create an array of question keys from "q1" to "q10"
    const questionKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

    // Create an array to store the generated charts

    // To destroy the charts
    for (const chart of this.charts) {
      chart.destroy();
    }

    // Clear the array to release references to the destroyed charts
    this.charts.length = 0;

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

      this.charts.push(chart); // Store the chart in the array
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

  logout() {
    localStorage.removeItem('session');
    this.router.navigate(['']);
  }
}
