import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mob: new FormControl ('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    business: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    city: new FormControl('', Validators.required),
    describe: new FormControl('', Validators.required)
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




