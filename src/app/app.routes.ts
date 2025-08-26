import { Routes } from '@angular/router';
import path from 'path';
import { NavbarComponent } from './navbar/navbar.component';
import { PhysicianComponent } from './physician/physician.component';
import { AppComponent } from './app.component';
import { NurseComponent } from './nurseDetails/nurse/nurse.component';
import { BlockComponent } from './blockDetails/block/block.component';
import { RoomComponent } from './roomDetails/room/room.component';
import { PatientComponent } from './patientDetails/patient/patient.component';
import { OnCallComponent } from './onCallDetails/on-call/on-call.component';

export const routes: Routes = [
    // {path:'',component:NavbarComponent},
    {path:'',component:PhysicianComponent},
    {path:'nurse',component:NurseComponent},
    {path:'block',component:BlockComponent},
    {path:'room',component:RoomComponent},
    {path:'patient',component:PatientComponent},
    {path:'onCall',component:OnCallComponent}
];
