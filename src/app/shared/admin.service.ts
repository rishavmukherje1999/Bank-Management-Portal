import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  IsLoggedIn()
  {
    return !!localStorage.getItem('token2');
  }
}