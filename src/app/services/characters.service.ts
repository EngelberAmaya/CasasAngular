import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(public http: HttpClient) { }

   getAllSlytherin(){
  	return this.http.get('http://hp-api.herokuapp.com/api/characters/house/slytherin');  	
   }

   getAlLGryffindor(){
  	return this.http.get('http://hp-api.herokuapp.com/api/characters/house/gryffindor');  	
   }

   getAllRavenclaw (){
  	return this.http.get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw');  	
   }

   getAllHufflepuff(){
  	return this.http.get('http://hp-api.herokuapp.com/api/characters/house/hufflepuff');  	
   }
}
