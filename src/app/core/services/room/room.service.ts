import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetRoom } from '../../models/room/get-room';
import { UpdateRoom } from '../../models/room/update-room';
import { CreateRoom } from '../../models/room/create-room';
import { DeleteRoom } from '../../models/room/delete-room';
import { environment } from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl=`${environment.baseUrl}/room`

  constructor(private http:HttpClient) { }

  public getRoom():Observable<GetRoom[]>{
    return this.http.get<GetRoom[]>(`${this.apiUrl}`)
  }

  public postRoom(postRoom:CreateRoom):Observable<CreateRoom>{
    return this.http.post<CreateRoom>(`${this.apiUrl}`,postRoom)
  }

  public updateRoom(updateRoom:UpdateRoom):Observable<UpdateRoom>{
    return this.http.post<UpdateRoom>(`${this.apiUrl}`,updateRoom)
  }

  public deleteRoom(deleteRoom:DeleteRoom):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}`,{
      body:deleteRoom
    })
  }
}
