import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

interface Casa {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  selectedValue: string = '';

  casas: Casa[] = [
    {value: '0', viewValue: 'Slytherin'},
    {value: '1', viewValue: 'Gryffindor'},
    {value: '2', viewValue: 'Ravenclaw '},
    {value: '3', viewValue: 'Hufflepuff'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
