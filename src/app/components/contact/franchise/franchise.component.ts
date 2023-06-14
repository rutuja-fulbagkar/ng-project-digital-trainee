import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent {
  name!: String;
  mob!: Number;
  email!: string;
  business!: String;
  place!: String;
  city!: String;
  description!: String;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mob: new FormControl ('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    business: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    city: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  

  isShowDiv=true;
  ToogleDisplayDiv(){
   this.isShowDiv = !this.isShowDiv;
  }
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
    this.http.post('http://localhost:3333/franchise/', fromdata).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }

}




