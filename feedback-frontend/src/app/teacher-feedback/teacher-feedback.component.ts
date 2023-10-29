import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FacultySubjects } from '../class/FacultySubjects/faculty-subjects';
import { FacultyService } from '../services/restAPI/faculty-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-teacher-feedback',
  templateUrl: './teacher-feedback.component.html',
  styleUrls: ['./teacher-feedback.component.scss'],
  providers: [MessageService]
})

export class TeacherFeedbackComponent {

  loader = true;

  faculty: FacultySubjects[] = [];

  faculty1: any[] = [
    { subject: 'Math' },
    { subject: 'Science' }
  ];

  ucidValidation!: boolean;

  subjectArray: any[] = [];

  itemForms: FormGroup[] = [];

  step = 1;
  nextButtonClicked = false;
  error: string = "";
  feedback: any = [];
  param: any;

  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private facultyService: FacultyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['class'];
    });
    this.getFacultySubjects();
  }

  // ---------- UCID VALIDATION -------------
  ucidFormatValidator(control: AbstractControl): ValidationErrors | null {
    const ucidValue = control.value as string;
    if (!ucidValue) {
      return { ucidFormat: true, error: "UCID Required" };
    }

    // Define a regular expression pattern for UCID format
    const ucidPattern = /^\d{10}$/;

    if (!ucidPattern.test(ucidValue)) {
      // Return a validation error object if the format is not valid
      return { ucidFormat: true, error: "UCID Required" };
    }

    // Return null if the validation passes
    return null;
  }

  // ---------- Q's VALIDATION -------------
  customQValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    // Your custom validation logic here
    if (value === '') {
      return { qInvalid: true, error: "Rating Required" }; // Add your own validation condition
    }

    // Return null if the validation passes
    return null;
  }

  createItemForms() {
    this.itemForms = this.faculty.map((item, index) => {
      const formGroupConfig = {
        ucid: new FormControl(''),
        q1: new FormControl(''),
        q2: new FormControl(''),
        q3: new FormControl(''),
        q4: new FormControl(''),
        q5: new FormControl(''),
        q6: new FormControl(''),
        q7: new FormControl(''),
        q8: new FormControl(''),
        q9: new FormControl(''),
        q10: new FormControl(''),
        q11: new FormControl('')
        // Add more form controls for other questions as needed
      };

      if (item.isElective == 'NO') {
        formGroupConfig['q1'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q2'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q3'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q4'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q5'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q6'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q7'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q8'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q9'].setValidators([Validators.required, this.customQValidator]);
        formGroupConfig['q10'].setValidators([Validators.required, this.customQValidator]);
      }

      // Apply the UCID validation only for the first form group
      if (index === 0) {
        formGroupConfig['ucid'].setValidators([Validators.required, this.ucidFormatValidator]);
      }

      return this.formBuilder.group(formGroupConfig);
    });
  }

  private getFacultySubjects() {
    this.facultyService.getFacultySubjects(this.param).subscribe((data) => {
      this.faculty = data;
    });
    if (this.faculty.length === 0) {
      this.facultyService.getJSON().subscribe((data) => {
        this.faculty = data;
      })
    }
    setTimeout(() => {
      this.createItemForms();
      this.loader = false;
    }, 3000);
  }

  next() {
    this.nextButtonClicked = true;
    const activeFormGroup = this.itemForms[this.step - 1];
    console.log(this.itemForms[this.step - 1]);
    if (activeFormGroup.valid) {
      if (this.step <= this.itemForms.length - 1) {
        this.step++;
        this.nextButtonClicked = false;
        console.log('Active form is valid');
      }
    } else {
      // Form is invalid, you can display an error message or handle it as needed
      console.log('Active form is invalid');
    }
    document.documentElement.scrollTop = 0;
    // this.mergeFormGroups();
  }

  previous() {
    this.step--;
  }

  submit() {
    this.nextButtonClicked = true;
    const activeFormGroup = this.itemForms[this.step - 1];
    console.log(this.itemForms[this.step - 1]);
    if (activeFormGroup.valid) {
      if (this.step <= this.itemForms.length) {
        // this.step++;
        this.nextButtonClicked = false;
        console.log('Active form is valid');
        this.mergeFormGroups();
      }
    } else {
      // Form is invalid, you can display an error message or handle it as needed
      console.log('Active form is invalid');
    }
  }

  mergedData: any[] = [];

  mergeFormGroups(): void {
    this.mergedData = this.itemForms.map((formGroup, index) => {
      const formValue = formGroup.value;
      if (formValue.q1 === '' || formValue.q2 === '' || formValue.q3 === '' || formValue.q4 === '' || formValue.q5 === '' ||
        formValue.q6 === '' || formValue.q7 === '' || formValue.q8 === '' || formValue.q5 === '' || formValue.q10 === '') {
        return null;
      }
      return {
        subject: this.faculty[index].subject,
        ucid: this.itemForms[0].value['ucid'],
        q1: formValue.q1,
        q2: formValue.q2,
        q3: formValue.q3,
        q4: formValue.q4,
        q5: formValue.q5,
        q6: formValue.q6,
        q7: formValue.q7,
        q8: formValue.q8,
        q9: formValue.q9,
        q10: formValue.q10,
        q11: formValue.q11,
        faculty: this.faculty[index].faculty_name,
        className: this.faculty[index].className
        // Add more properties as needed for other form controls
      };

    }).filter(item => item !== null);


    // Now, mergedData contains the merged objects
    console.log(JSON.stringify(this.mergedData));

    this.facultyService.facultyReview(JSON.stringify(this.mergedData)).subscribe((response) => {
      console.log(response);
      this.showTopCenter();
      setTimeout(() => {
        this.goToHomePage();
      }, 2000);
    })

  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Feedback Submitted Successfully' });
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

}