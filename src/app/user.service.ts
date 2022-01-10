import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/loans';
  url2='http://localhost:3000/applytoadmin';
  url3="http://localhost:3000/users";

  getAllNewJoiner()
  {
    return this.http.get(this.url2);
  }

  getAllUsers()
  {
     return this.http.get(this.url);
  }
  saveempdata(data:any)
  {
    console.log(data);
    return this.http.post(this.url3,data);
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
  deletemp(id:number)
  {
    return this.http.delete(`${this.url2}/${id}`);
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
