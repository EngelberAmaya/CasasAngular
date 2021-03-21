import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(public http: HttpClient) { }

  
  getAllTeacher(){

  	return this.http.get('http://hp-api.herokuapp.com/api/characters/staff');
  	
  }
}
