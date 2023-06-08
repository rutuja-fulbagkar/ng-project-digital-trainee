import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-hire-from-us',
  templateUrl: './hire-from-us.component.html',
  styleUrls: ['./hire-from-us.component.css']
})
export class HireFromUsComponent {
  form = new FormGroup({
    orgname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // body: new FormControl('', Validators.required)
    mob: new FormControl ('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    nameofcompanyrepresentative: new FormControl ('',[Validators.required]),
    natureofindustry: new FormControl('', [Validators.required]),
    typeofemployees: new FormControl('',[Validators.required]),
    Officelocation: new FormControl('',[Validators.required]),
    numberofemployeesyouwouldliketohire: new FormControl('',[Validators.required]),
    resume: new FormControl('',[Validators.required]),
    websiteoforganisation: new FormControl('', [Validators.required]),
    stipend: new FormControl('', Validators.required),
    jobprofileofapplicant: new FormControl('',[Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
}
