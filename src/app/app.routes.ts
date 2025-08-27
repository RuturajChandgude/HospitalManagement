import { Routes } from '@angular/router';
import path from 'path';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PhysicianComponent } from './components/physicianDetails/physician/physician.component';
import { AppComponent } from './app.component';
import { NurseComponent } from './components/nurseDetails/nurse/nurse.component';
import { BlockComponent } from './components/blockDetails/block/block.component';
import { RoomComponent } from './components/roomDetails/room/room.component';
import { PatientComponent } from './components/patientDetails/patient/patient.component';
import { OnCallComponent } from './components/onCallDetails/on-call/on-call.component';

export const routes: Routes = [
    // {path:'',component:NavbarComponent},
    {path:'', redirectTo:'physician', pathMatch:'full'}, 
    {path:'physician',component:PhysicianComponent},
    {path:'nurse',component:NurseComponent},
    {path:'block',component:BlockComponent},
    {path:'room',component:RoomComponent},
    {path:'patient',component:PatientComponent},
    {path:'onCall',component:OnCallComponent}
];
