import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-feedback',
  templateUrl: './teacher-feedback.component.html',
  styleUrls: ['./teacher-feedback.component.scss']
})
export class TeacherFeedbackComponent {

  PR!: FormGroup;
  HK!: FormGroup;
  NM!: FormGroup;
  AK!: FormGroup;
  PT!: FormGroup;

  PR_step = false;
  HK_step = false;
  NM_step = false;
  AK_step = false;
  PT_step = false;

  step = 1;
  feedback: any = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.PR = this.formBuilder.group({
      ucid: [''],
      q1: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      faculty: ['Prof. Dr. Pooja Raundale']
    });

    this.HK = this.formBuilder.group({
      ucid: [''],
      q1: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      faculty: ['Prof. Harshil Kanakia']
    });

    this.NM = this.formBuilder.group({
      ucid: [''],
      q1: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      faculty: ['Prof. Nikhita Mangaonkar']
    });

    this.AK = this.formBuilder.group({
      ucid: [''],
      q1: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      faculty: ['Prof. Aarti Karande']
    });

    this.PT = this.formBuilder.group({
      ucid: [''],
      q1: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      faculty: ['Prof. Pallavi Thakur']
    });

    this.PR.get('ucid')?.valueChanges.subscribe((newValue) => {
      this.HK.get('ucid')?.setValue(newValue);
      this.NM.get('ucid')?.setValue(newValue);
      this.AK.get('ucid')?.setValue(newValue);
      this.PT.get('ucid')?.setValue(newValue);
    });
  }

  get pooja() { return this.PR.controls; }
  get harshil() { return this.HK.controls; }
  get nikhita() { return this.NM.controls; }
  get aarti() { return this.AK.controls; }
  get pallavi() { return this.PT.controls; }

  next() {
    if (this.step == 1) {
      this.PR_step = true;
      // if (this.HK.invalid) { return }
    }
    else if (this.step == 2) {
      this.HK_step = true;
    }
    else if (this.step == 3) {
      this.NM_step = true;
    }
    else if (this.step == 4) {
      this.AK_step = true;
    }
    this.step++;
    document.documentElement.scrollTop = 0;
  }

  previous() {
    this.step--;
    if (this.step == 1) {
      this.HK_step = false;
    }
    else if (this.step == 2) {
      this.NM_step = false;
    }
    else if (this.step == 3) {
      this.AK_step = false;
    }
    else if (this.step == 4) {
      this.PT_step = false;
    }
  }

  submit() {
    if (this.step == 5) {
      this.PT_step = true;
      // if (this.educationalDetails.invalid) { return }
      this.feedback.push(this.PR.value);
      this.feedback.push(this.HK.value);
      this.feedback.push(this.NM.value);
      this.feedback.push(this.AK.value);
      this.feedback.push(this.PT.value);
      console.log(JSON.stringify(this.feedback));
    }
  }

  

}