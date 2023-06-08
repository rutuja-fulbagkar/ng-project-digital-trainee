import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent {
  name!: String;
  mob!: Number;
  email!: string;
  course!: String;
  branch!: String;


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
    mob: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    course: new FormControl('', [Validators.required]),
    branch: new FormControl('', [Validators.required]),
  });

  isShowDiv = true;
  ToogleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  //  isShow=true;
  //  ToogleDisplayDivOnlineTraining(){
  //   this.isShow=!this.isShow;
  //  }
  get f() {
    return this.form.controls;
  }
  constructor(private http: HttpClient) {}
  submit() {
    console.log(this.form.value);
    const fromdata=this.form.value;

    // const fromdata = {
    //   name: this.name,
    //   mob: this.mob,
    //   email: this.email,
    //   course: this.course,
    //   branch: this.branch,
    // };

    console.log(fromdata);
    this.http.post('http://localhost:3333/contact/', fromdata).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
}
