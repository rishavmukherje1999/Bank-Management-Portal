import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  constructor(private u:UserService,private router:Router) { }
  adduserdetails = new FormGroup({
     id: new FormControl('',Validators.required),
     name: new FormControl('',Validators.required),
     address: new FormControl('',Validators.required),
     customerid: new FormControl('',Validators.required),
     pan: new FormControl('',Validators.required),
     loantype: new FormControl('',Validators.required),
     loanamount:new FormControl('',Validators.required),
     rate: new FormControl('',Validators.required),
     duration: new FormControl('',Validators.required)


  });
  ngOnInit(): void {
  }
 
  savedata()
  {
    if(this.adduserdetails.value.name=='' || this.adduserdetails.value.id==''||this.adduserdetails.value.address==''||this.adduserdetails.value.customerid==''||this.adduserdetails.value.pan==''||this.adduserdetails.value.loanamount==''
    ||this.adduserdetails.value.loantype==''||this.adduserdetails.value.rate==''|| this.adduserdetails.value.duration=='')
    {
      alert('Details cannot be left empty!!Please enter all the details carefully');
      this.router.navigate(['add']);
    }
    else
    {
    console.log(this.adduserdetails.value);
    this.u.saveuserdata(this.adduserdetails.value).subscribe((result)=>{
      console.log(result),
      alert('Data Entered Successfully');
      this.adduserdetails.reset();
      this.router.navigate(['list']);
    });
  }
  }

}
