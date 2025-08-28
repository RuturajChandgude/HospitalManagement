import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'physician', pathMatch: 'full' },
    { path: 'physician', loadComponent: () => import('./components/physicianDetails/physician/physician.component').then((m) => m.PhysicianComponent) },
    { path: 'nurse', loadComponent: () => import('./components/nurseDetails/nurse/nurse.component').then((m) => m.NurseComponent) },
    { path: 'block', loadComponent: () => import('./components/blockDetails/block/block.component').then((m) => m.BlockComponent) },
    { path: 'room', loadComponent: () => import('./components/roomDetails/room/room.component').then((m) => m.RoomComponent) },
    { path: 'patient', loadComponent: () => import('./components/patientDetails/patient/patient.component').then((m) => m.PatientComponent) },
    { path: 'onCall', loadComponent: () => import('./components/onCallDetails/on-call/on-call.component').then((m) => m.OnCallComponent) },
];
