import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-career-application-submit',
  templateUrl: './career-application-submit.component.html',
  styleUrls: ['./career-application-submit.component.css']
})
export class CareerApplicationSubmitComponent {
  name!: String;
  mob!: Number;
  email!: string;
  location!: String;
  relocate!: String;
  ctc!:string;
  notcieperiod!:string;
  currentlyemployeed!:string;
  applyingfor!:string;
  expectedctc!:string;
  resume!:string;


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mob: new FormControl ('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
   
    location: new FormControl('', [Validators.required,Validators.minLength(3)]),
    relocate: new FormControl('', Validators.required),
   
    ctc: new FormControl ('',[Validators.required]),
    notcieperiod: new FormControl('', [Validators.required, Validators.minLength(3)]),
    currentlyemployeed: new FormControl('',[Validators.required]),
    applyingfor: new FormControl('',[Validators.required]),
    expectedctc: new FormControl('',[Validators.required]),
    resume: new FormControl('',[Validators.required]),
  });
  

  isShowDiv=true;
  ToogleDisplayDiv(){
   this.isShowDiv = !this.isShowDiv;
  }
  get f(){
    return this.form.controls;
  }

  constructor(private http: HttpClient) {}
  submit(){
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
    this.http.post('http://localhost:3333/careerapplications/', fromdata).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
  
}
