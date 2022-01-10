import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminwelcome',
  templateUrl: './adminwelcome.component.html',
  styleUrls: ['./adminwelcome.component.css']
})
export class AdminwelcomeComponent implements OnInit {

  constructor(private user:UserService,private routed:Router) { }
  userdata:any=[];
  ngOnInit(): void {
    this.user.getAllNewJoiner().subscribe((result)=>
    {
      console.log(result);
      this.userdata=result;
    });
  }
  deleteStudent(id:number)
  {
    console.log(id);
    this.user.deletemp(id).subscribe((res)=>
    {
      console.log(res);
      alert('Deleted Successfully!!');
     this.ngOnInit();
    })

  }
  logout()
  {
    localStorage.removeItem('token2');
    this.routed.navigate(['home']);
    alert('Logged Out As Administrator!!')
  }

}
