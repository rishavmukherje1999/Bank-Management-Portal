import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  router: any;

  constructor(private user:UserService,private routed:Router) { }
  userdata:any=[];

  ngOnInit(): void {
    this.user.getAllUsers().subscribe((result)=>
    {
      console.log(result);
      this.userdata=result;
    });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.routed.navigate(['login']);
}
  deleteStudent(id:number)
  {
    console.log(id);
    this.user.deleteuser(id).subscribe((res)=>
    {
      console.log(res);
      alert('Deleted Successfully!!');
     this.ngOnInit();
    })

  }

}
