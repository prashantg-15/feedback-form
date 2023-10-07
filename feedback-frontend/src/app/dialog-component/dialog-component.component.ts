import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogService } from '../services/general/dialog-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from '../services/restAPI/faculty-service.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent {

  @ViewChild('userInput') userInput!: ElementRef;
  @ViewChild('passInput') passInput!: ElementRef;

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  usernameError: boolean = false;
  passwordError: boolean = false;

  session: any;

  constructor(public service: DialogService, private facultyService: FacultyService, private router: Router, private fb: FormBuilder) { 
    let session: any = localStorage.getItem('session');
    if(session) {
      session = JSON.parse(session);
    }
    this.session = session;
  }

  ngOnInit() {

  }

  clearError() {
    if (this.loginForm.value.username) {
      this.usernameError = false; // Clear the 'required' error
    }
    if (this.loginForm.value.password) {
      this.passwordError = false; // Clear the 'required' error
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.facultyService.loginValidation(this.loginForm.value).subscribe({
        next: (response) => {
          // You can process the response data as needed
          const jsonResponse = JSON.parse(response)
          console.log(jsonResponse.result);
          if (response && jsonResponse.result !== 'fail') {
            this.session = this.loginForm.value;
            this.session.result = jsonResponse.result;
            localStorage.setItem('session', JSON.stringify(this.session));
            this.router.navigate(['feedbackSummary',this.loginForm.value.username]);
          } else {
            this.usernameError = true;
            this.passwordError = true;
            this.userInput.nativeElement.value = '';
            this.passInput.nativeElement.value = '';
          }
        },
        error: (error) => {
          console.log("Error : " + error);
        }
      })
    }else {
      this.usernameError = true;
      this.passwordError = true;
    }
  }

}
