import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getPhysician } from '../models/physician';
import { postPhysician,updatePhysician } from '../models/physician';
@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
 
  constructor(private http:HttpClient) { }
  private apiUrl='https://gdtc-training-api.azurewebsites.net'

  physician=`/api/hospital/physician`
  getPhysican():Observable<getPhysician[]>{
    return this.http.get<getPhysician[]>(`${this.apiUrl}${this.physician}`)
  }

  postPhysician(postPhysician:postPhysician):Observable<postPhysician>{
    return this.http.post<postPhysician>(`${this.apiUrl}${this.physician}`,postPhysician)
  }

  updatePhysician(updatePhysician:updatePhysician):Observable<updatePhysician>{
    return this.http.put<updatePhysician>(`${this.apiUrl}${this.physician}`,updatePhysician)
  }
 

  deletePhysician(deletePhysician:updatePhysician):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}${this.physician}`,{
      body:deletePhysician
    })
  }


}
