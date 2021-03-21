import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharactersService } from '../../services/characters.service';

export interface Casa {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: Date;
  yearOfBirth: number;
  ancestry: string;
  hairColour: string;
  wand: Wand[];
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
}

export interface Wand {
  wood: string;
  core: string;
  length: number;
}

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.component.html',
  styleUrls: ['./ravenclaw.component.css']
})
export class RavenclawComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];
  dataSource: MatTableDataSource<Casa>;
  casa: Casa[] = [];
  anio: number = 0;

  spiner = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public charactersService: CharactersService) { 
  	this.dataSource = new MatTableDataSource(this.casa);
  }

  ngOnInit(): void {
  	this.obtenerCasa();
  	this.anio = new Date().getFullYear();
  }

  obtenerCasa(){
    this.spiner = true;
    this.charactersService.getAllRavenclaw()
      .subscribe( (resp:any) => {
        //console.log(resp);
        this.dataSource.data = resp;
        this.spiner = false;
               
      })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
