import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public adminform!: FormGroup
  constructor(private formBuilder:FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.adminform = this.formBuilder.group({
      adminid:['']
    })
  }

  enter()
  {
    this.http.get<any>("http://localhost:3000/admindetails").subscribe(res=>
    { 
      const user=res.find((a:any)=>{
      return a.adminid==this.adminform.value.adminid

      });
      if(user)
      {
        alert('Welcome Administrator!!');
        this.adminform.reset();
        localStorage.setItem('token2',"dqioudqwdnwqidhdiuhnwdnwodhqdhdidhhdwah9hdiqh");
        this.router.navigate(['adminwelcome']);
        


      }
      else
      {
        alert('Admin Details Not Found');

      }

    },err=>{
      alert('Something went wrong there!!!');
    })

  }

}
