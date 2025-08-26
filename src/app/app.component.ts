import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

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
    localStorage.setItem('token','eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiI1NyIsInRlbmFudF9lbWFpbCI6InJ1dHVyYWouY2hhbmRndWRlQGdvZGlnaXRhbHRjLmNvbSIsImNyZWF0ZWRfb24iOiI4LzIwLzIwMjUgMjo1MjoyNCBQTSIsImV4cCI6MTc2MzkwMzQ4Mn0.jWHvHuEdyrNV--4x8jH4I_1zPFqAfQIjB-qkZkeIdOo')
  }
}
