import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getNurse,postNurse,updateNurse } from '../models/nurse';


@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http:HttpClient) { }

  private apiUrl='https://gdtc-training-api.azurewebsites.net'
  private nurse='/api/hospital/nurse'

  getNurse():Observable<getNurse[]>{
    return this.http.get<getNurse[]>(`${this.apiUrl}${this.nurse}`)
  }

  postNurse(postNurse:postNurse):Observable<postNurse>{
    return this.http.post<postNurse>(`${this.apiUrl}${this.nurse}`,postNurse)
  }

  updateNurse(updateNurse:updateNurse):Observable<updateNurse>{
    return this.http.put<updateNurse>(`${this.apiUrl}${this.nurse}`,updateNurse)
  }

  deleteNurse(deleteNurse:updateNurse):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}${this.nurse}`,{
      body:deleteNurse
    })
  }
}
