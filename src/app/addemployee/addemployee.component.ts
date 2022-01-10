import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private u:UserService,private router:Router) { }
  addempdetails = new FormGroup({
    id: new FormControl(''),
    customerid: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }
  empsavedata()
  {
    if(this.addempdetails.value.id==''||this.addempdetails.value.customerid==''||
     this.addempdetails.value.password=='')
    {
      alert('Details cannot be left empty!!Please enter all the details carefully');
    }
    else
    {
    console.log(this.addempdetails.value);
    this.u.saveempdata(this.addempdetails.value).subscribe((result)=>{
      console.log(result),
      alert('Data Entered Successfully');
      this.addempdetails.reset();
      this.router.navigate(['adminwelcome']);
    });
  }

}
}
