import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  students: Object[];
  movies:any;
  constructor() {
    // this.students = [{fname:"john",lname:"chris",score:90},
    //                 {fname:"chris",lname:"hemsworth",score:95}, 
    //                 {fname:"tony",lname:"stark",score:98}];
    this.students=[];
    this.movies=[];
   }
   getStudents(){
    return  this.students=[{fname:"john",lname:"chris",score:90},
               {fname:"chris",lname:"hemsworth",score:95}, 
               {fname:"tony",lname:"stark",score:98}];
   }
   getMovies(){
     return this.movies=[{title:"the Avengers",genre:"sci-fi",director:"joss"},
                        {title:"Avengers age of ultron",genre:"sci-fi",director:"joss"},
                        {title:"Avengers end game",genre:"sci-fi",director:"joss"}];
   }


  ngOnInit() {
  }

}
