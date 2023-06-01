import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   forms = new FormGroup({
    username: new FormControl('' ,Validators.required),
    usermobile: new FormControl('',Validators.required),
    useremail: new FormControl('',Validators.required),
    usermsg: new FormControl('',Validators.required)
  })

  formdata()
  {
    console.log(this.forms.value);
  };
}
