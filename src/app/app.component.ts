import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { token } from './env/env';
@Component({
  selector: 'app-root',
  imports: [MatSidenavModule,MatListModule,RouterOutlet,RouterModule,NavbarComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HMS';
  
  constructor(){}
  ngOnInit() {
     localStorage.setItem('token',`${token.tokneUrl}`)
  }
}
