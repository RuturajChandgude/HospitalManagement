import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateOnCall } from '../../models/onCall/create-on-call';
import { GetOnCall } from '../../models/onCall/get-on-call';
import { UpdateOnCall } from '../../models/onCall/update-on-call';
import { DeleteOnCall } from '../../models/onCall/delete-on-call';
import { environment } from '../../../env/env';
@Injectable({
  providedIn: 'root'
})
export class OnCallService {
  private apiUrl = `${environment.baseUrl}/oncall`
  constructor(private http: HttpClient) { }

  public getOnCall(): Observable<GetOnCall[]> {
    return this.http.get<GetOnCall[]>(`${this.apiUrl}`)
  }

  public postOnCall(postOnCall: CreateOnCall): Observable<CreateOnCall> {
    return this.http.post<CreateOnCall>(`${this.apiUrl}`, postOnCall)
  }

  public updateOnCall(updateOnCall: UpdateOnCall): Observable<UpdateOnCall> {
    return this.http.put<UpdateOnCall>(`${this.apiUrl}`, updateOnCall)
  }

  public deleteOnCall(deleteOnCall: DeleteOnCall): Observable<void> {
    return this.http.request<void>('DELETE', `${this.apiUrl}`, {
      body: deleteOnCall
    })
  }
}
