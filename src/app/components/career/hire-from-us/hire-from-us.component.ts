import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hire-from-us',
  templateUrl: './hire-from-us.component.html',
  styleUrls: ['./hire-from-us.component.css']
})
export class HireFromUsComponent {
  orgname!: String;
  mob!: Number;
  email!: string;
  nameofcompanyrepresentative!: String;
  natureofindustry!: String;
  typeofemployees!:String;
  officelocation!:String;
  numberofemployeesyouwouldliketohire!:String;
  resume!:String;
  websiteoforganisation!:String;
  stipend!:String;
  jobprofileofapplicant!:String;

  form = new FormGroup({
    orgname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // body: new FormControl('', Validators.required)
    mob: new FormControl ('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    nameofcompanyrepresentative: new FormControl ('',[Validators.required]),
    natureofindustry: new FormControl('', [Validators.required]),
    typeofemployees: new FormControl('',[Validators.required]),
    officelocation: new FormControl('',[Validators.required]),
    numberofemployeesyouwouldliketohire: new FormControl('',[Validators.required]),
    resume: new FormControl('',[Validators.required]),
    websiteoforganisation: new FormControl('', [Validators.required]),
    stipend: new FormControl('', Validators.required),
    jobprofileofapplicant: new FormControl('',[Validators.required]),
  });
  
  get f(){
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
    this.http.post('http://localhost:3333/hirefromus/', fromdata).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
}
