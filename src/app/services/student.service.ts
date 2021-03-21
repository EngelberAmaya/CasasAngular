import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) { }

  getAllStudent(){

  	return this.http.get('http://hp-api.herokuapp.com/api/characters/students');
  	
  }
}
