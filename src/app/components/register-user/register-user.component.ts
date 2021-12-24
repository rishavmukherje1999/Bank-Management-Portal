import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public signupForm!: FormGroup;
   format:string = '[!@#$%^&*()_+\-=\[\]{};';
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      fullname:['',Validators.required],
      dob:['',Validators.required],
      address:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      accounttype:['',Validators.required],
      pan:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required,Validators.email],
      customerid:['',Validators.required],
      password:['',Validators.required]


    })
  }
 fullnamelength()
 {
   return this.signupForm.value.fullname.length < 5? true: false;
 }
 usernamelength()
 {
  return this.signupForm.value.username.length < 4? true: false;
 }
 passwordcriteria()
 {
  return this.signupForm.value.password.length < 5? true:false;
 }
 emailcriteria()
 {
   return this.signupForm.value.email.endswith(".com");
 }

  signUp()
  {
    if(this.signupForm.value.fullname.length<5 ||this.signupForm.value.password.length<5)
    {
      alert('Some of the fields are entered wrong!!Check before inputting');
      this.router.navigate(['register']);
    }
    else
    {
    this.http.post<any>("http://localhost:3000/users",this.signupForm.value)
     .subscribe(res=>{
       alert('Sign Up Successfull!!!')
       this.signupForm.reset();
      this.router.navigate(['success']);
     }, err=>
     {
       alert('Something went wrong!! Try again.')
     })
    
    }
  }
 
 
}
