import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetPatient } from '../../models/patient/get-patient';
import { UpdatePatient } from '../../models/patient/update-patient';
import { CreatePatient } from '../../models/patient/create-patient';
import { DeletePatient } from '../../models/patient/delete-patient';
import { environment } from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl=`${environment.baseUrl}/patient`
  
  constructor(private http:HttpClient) { }

  public getPatient():Observable<GetPatient[]>{
    return this.http.get<GetPatient[]>(`${this.apiUrl}`)
  }
  
  public postPatient(postPatient:CreatePatient):Observable<CreatePatient>{
    return this.http.post<CreatePatient>(`${this.apiUrl}`,postPatient)
  }

  public updatePatient(updatePatient:UpdatePatient):Observable<UpdatePatient>{
    return this.http.put<UpdatePatient>(`${this.apiUrl}`,updatePatient)
  }

  public deletePatient(deletePatient:DeletePatient):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}`,{
      body:deletePatient
    })
  }
}
