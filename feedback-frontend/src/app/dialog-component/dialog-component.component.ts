import { Component } from '@angular/core';
import { DialogService } from '../services/general/dialog-service.service';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from '../services/restAPI/faculty-service.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent {

  constructor(public service: DialogService, private facultyService: FacultyService, private router: Router) { }

  ngOnInit() {

  }

  formData: any = {}; // Object to store form data
  usernameError: any = '';
  passwordError: any = '';
  result: any = '';

  // Method to handle form submission
  onSubmit() {
    if (this.formData.username && this.formData.password) {
      // Your login logic here
      this.facultyService.loginValidation(this.formData).subscribe({
        next: (response) => {
          // You can process the response data as needed
          const jsonResponse = JSON.parse(response)
          console.log(response.reault);
          if (response && jsonResponse.result === 'success') {
            this.router.navigate(['feedbackSummary']);
          } else {
            this.usernameError = "Please enter correct username";
            this.passwordError = "Please enter correct password";
          }
        },
        error: (error) => {
          console.log("Error : " + error);
        }
      })
    }
    else if (this.formData.username === '') {
      this.usernameError = "Please enter correct username";
    }
    else if (this.formData.password === '') {
      this.passwordError = "Please Enter Correct Password"
    }
    else {
      // Handle validation errors or show a message to the user
      this.usernameError = "Please enter correct username";
      this.passwordError = "Please Enter Correct Password";
    }
  }

}
