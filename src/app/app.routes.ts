import { Routes } from '@angular/router';
import path from 'path';
import { NavbarComponent } from './navbar/navbar.component';
import { PhysicianComponent } from './physician/physician.component';
import { AppComponent } from './app.component';
import { NurseComponent } from './nurse/nurse.component';

export const routes: Routes = [
    {path:'',component:NavbarComponent},
    {path:'physician',component:PhysicianComponent},
    {path:'nurse',component:NurseComponent}

];
