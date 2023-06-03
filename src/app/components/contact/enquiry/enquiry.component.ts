import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mob: new FormControl ('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    course: new FormControl('', [Validators.required]),
    branch: new FormControl('', [Validators.required]),
  });

 isShowDiv=true;
 ToogleDisplayDiv(){
  this.isShowDiv = !this.isShowDiv;
 }
//  isShow=true;
//  ToogleDisplayDivOnlineTraining(){
//   this.isShow=!this.isShow;
//  }
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }


  
}
