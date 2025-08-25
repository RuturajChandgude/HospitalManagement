import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getRoom,updateRoom,deleteRoom,postRoom } from '../models/room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  private apiUrl='https://gdtc-training-api.azurewebsites.net/api/hospital/room'

  getRoom():Observable<getRoom[]>{
    return this.http.get<getRoom[]>(`${this.apiUrl}`)
  }

  postRoom(postRoom:postRoom):Observable<postRoom>{
    return this.http.post<postRoom>(`${this.apiUrl}`,postRoom)
  }

  updateRoom(updateRoom:updateRoom):Observable<updateRoom>{
    return this.http.post<updateRoom>(`${this.apiUrl}`,updateRoom)
  }

  deleteRoom(deleteRoom:deleteRoom):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}`,{
      body:deleteRoom
    })
  }
}
