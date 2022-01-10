import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private user:UserService,private router:ActivatedRoute,private routed:Router) { }

  edituserdetails = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    customerid: new FormControl(''),
    duration: new FormControl('')


 });
 ngOnInit(): void {
   console.log(this.router.snapshot.params.id);
   this.user.getUserById(this.router.snapshot.params.id).subscribe((result:any)=>
   {
     console.log(result);
     this.edituserdetails = new FormGroup({
      id: new FormControl(result['id']),
      name: new FormControl(result['name']),
      customerid: new FormControl(result['customerid']),
      duration: new FormControl(result['duration'])
   });
     
   });
 }
 updatedata()
 {
    this.user.updateuserdata(this.router.snapshot.params.id,this.edituserdetails.value).subscribe((result)=>
    {
      alert('Data Updated Successfully');
      console.log(result);
      this.routed.navigate(['list']);
      
    })
 }

}
