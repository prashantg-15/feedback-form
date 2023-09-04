import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  feedback = "";
  onClick(feedback: string) {
    this.feedback = feedback;
    console.log(this.feedback);
  }

}
