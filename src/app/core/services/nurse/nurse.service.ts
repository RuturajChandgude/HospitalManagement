import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetNurse } from '../../models/nurse/get-nurse';
import { CreateNurse } from '../../models/nurse/create-nurse';
import { DeleteNurse } from '../../models/nurse/delete-nurse';
import { UpdateNurse } from '../../models/nurse/update-nurse';
import { environment } from '../../../env/env';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  private apiUrl=`${environment.baseUrl}/nurse`
  
  constructor(private http:HttpClient) { }
  
  public getNurse():Observable<GetNurse[]>{
    return this.http.get<GetNurse[]>(`${this.apiUrl}`)
  }

  public postNurse(postNurse:CreateNurse):Observable<CreateNurse>{
    return this.http.post<CreateNurse>(`${this.apiUrl}`,postNurse)
  }

  public updateNurse(updateNurse:UpdateNurse):Observable<UpdateNurse>{
    return this.http.put<UpdateNurse>(`${this.apiUrl}`,updateNurse)
  }

  public deleteNurse(deleteNurse:DeleteNurse):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}`,{
      body:deleteNurse
    })
  }
}
