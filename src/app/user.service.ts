import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/loans';

  getAllUsers()
  {
     return this.http.get(this.url);
  }
  saveuserdata(data:any)
  {
    console.log(data);
    return this.http.post(this.url,data);
  }
  deleteuser(id:number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  getUserById(id:number)
  {
    return this.http.get(`${this.url}/${id}`);
  }
  updateuserdata(id:number,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }
}
