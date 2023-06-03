import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-career-application-submit',
  templateUrl: './career-application-submit.component.html',
  styleUrls: ['./career-application-submit.component.css']
})
export class CareerApplicationSubmitComponent {
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
  
  submit(){
    console.log(this.form.value);
  }
}
