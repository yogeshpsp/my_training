import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormArray } from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  [x: string]: any;
  today=new Date();
   v:any = new Date();
     n:number = this.v.getFullYear();
    d:any;
    l:number;
ageval:any;
  constructor(private fb: FormBuilder) { }
userlist=this.fb.group({
  firstname: ['',Validators.required],
  lastname: [''],
  username: [''],
  password: [''],
  confirmpassword: [''],
  dob:[''],
  roles:[''],
  gender:[''],
  skills:[''], 
    age:[''],
  address: this.fb.group({
    address1: [''],
    address2: [''],
    street: [''],
    zip: ['']
  })
});
getAge(e) {
  console.log(e);
  const currentyear = new Date().getFullYear();
  const year = new Date(e).getFullYear();
  this.userlist.patchValue({ age: currentyear - year });
}

onSubmit(){
   this.d=new Date(this.userlist.get('dob').value);
 this.l=this.d.getFullYear();
 this.ageval=this.n-this.l;
 const age=this.userlist.get('userlist.age');
//  (age as FormArray).push(this.ageval);
  //let value=(this.userlist.get('dob').dat);
  //let source=Math.abs(value);
  //console.log(value);
  //console.log(source);
  //console.log(this.userlist.value);
}
postvalue(){
  this.userlist.patchValue({
    firstname:['yogesh'],
    lastname:['psp'],
    username:['yogesh11'],
    dob:['1999-03-11'],
    roles:['Admin'],
    gender:'male',
    age:'21',
    skills:[],
    address:{
      address1:['M.kollapatty'],
      address2:['S.Kollapatty'],
      street:['IOB street'],
      zip:'636030'
    }
  });
}
}
