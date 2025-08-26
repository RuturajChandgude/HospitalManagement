import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPhysician } from '../../models/physician/get-physician';
import { CreatePhysician } from '../../models/physician/create-physician';
import { UpdatePhysician } from '../../models/physician/update-physician';
import { DeletePhysician } from '../../models/physician/delete-physician';
import { environment } from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  private apiUrl=`${environment.baseUrl}/physician`
 
  constructor(private http:HttpClient) { }

  public getPhysican():Observable<GetPhysician[]>{
    return this.http.get<GetPhysician[]>(`${this.apiUrl}`)
  }

  public postPhysician(postPhysician:CreatePhysician):Observable<CreatePhysician>{
    return this.http.post<CreatePhysician>(`${this.apiUrl}`,postPhysician)
  }

  public updatePhysician(updatePhysician:UpdatePhysician):Observable<UpdatePhysician>{
    return this.http.put<UpdatePhysician>(`${this.apiUrl}`,updatePhysician)
  }
 
  public deletePhysician(deletePhysician:DeletePhysician):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}`,{
      body:deletePhysician
    })
  }


}
