import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'HMS';

  constructor(){}
  ngOnInit() {
   
    localStorage.setItem('token','eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwIiwidGVuYW50X2VtYWlsIjoicnV0dXJhai5jaGFuZGd1ZGVAZ29kaWdpdGFsdGMuY29tIiwiY3JlYXRlZF9vbiI6IjgvMjAvMjAyNSAyOjUyOjIzIFBNIiwiZXhwIjoxNzU2MDQ3MTQzfQ.07T27bAO4tlq5VdJPiQIcpvyHULQjih3bwHKMNonr4k')
  }
}
