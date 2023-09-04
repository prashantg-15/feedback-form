import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curriculum-feedback',
  templateUrl: './curriculum-feedback.component.html',
  styleUrls: ['./curriculum-feedback.component.scss']
})
export class CurriculumFeedbackComponent {

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;

  details: any = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.personalDetails = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: ['']
    });

    this.addressDetails = this.formBuilder.group({
      city: [''],
      address: [''],
      pincode: ['']
    });

    this.educationalDetails = this.formBuilder.group({
      highest_qualification: [''],
      university: [''],
      total_marks: ['']
    });
  }

  get personal() { return this.personalDetails.controls; }

  get address() { return this.addressDetails.controls; }

  get education() { return this.educationalDetails.controls; }

  next() {

    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) { return }
      this.step++
    }

    else if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
      this.step++;
    }
  }

  previous() {
    this.step--

    if (this.step == 1) {
      this.address_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }

  }

  submit() {

    if (this.step == 3) {
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
      this.details.push(this.personalDetails.value);
      this.details.push(this.addressDetails.value);
      this.details.push(this.educationalDetails.value);
      console.log(this.details);
    }
  }

}
