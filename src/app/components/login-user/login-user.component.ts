import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})   
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      customerid:['',Validators.required],
      password:['',Validators.required]
    })
  }
 
  login()
  {
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>
    { 
      const user=res.find((a:any)=>{
      return a.customerid==this.loginForm.value.customerid && a.password==this.loginForm.value.password

      });
      if(user)
      {
        alert('Login Successful');
        this.loginForm.reset();
        localStorage.setItem('token',"endsjnsnaindsnBubdiuqIUNDndnwneofn.shbdwibdqioudqwdnwqidhdiuhnwdnwodhqdhdidhhdwah9hdiqh");
        this.loginForm.value.customerid==10010?localStorage.setItem('customeyJhbGCriooiyernsnu.ejertype','user'):localStorage.setItem('customertype','admin')
        this.router.navigate(['home']);
        
      }
      else
      {
        alert('UseR Not Found');

      }

    },err=>{
      alert('Something went wrong there!!!');
    })



  }
 

}
