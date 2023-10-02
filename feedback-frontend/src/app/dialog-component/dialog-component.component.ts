import { Component } from '@angular/core';
import { DialogService } from '../services/general/dialog-service.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent {
  
  LoginForm: FormGroup;

  constructor(public service: DialogService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.LoginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
    
  }

  // usernameValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const username = control.value as string;
  //     if (username.length < minLength) {
  //       return { 'usernameInvalid': true };
  //     }
  //     return null;
  //   };
  // }

  // usernameValidator(control: AbstractControl): ValidationErrors | null {
  //   const username = control.value as string;
  //   if(!username) {
  //     return { usernameFormat: true, error: "Username Required" };
  //   }

  //   if(!)
  
  //   // Return null if the validation passes
  //   return null;
  // }

  onSubmit() {
    // if (this.LoginForm.valid) {
    //   const username = this.LoginForm.get('username')?.value;
    //   const password = this.LoginForm.get('password')?.value;

    //   // Now you can use 'username' and 'password' variables for your data processing or API call.
    //   console.log('Username:', username);
    //   console.log('Password:', password);

    //   // You can make an API request or perform other actions with the data here.
    // }
    this.router.navigate(['feedbackSummary']);
  }

}
