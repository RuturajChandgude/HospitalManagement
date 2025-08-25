import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getBlock,postBlock,updateBlock } from '../models/block';
@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor(private http:HttpClient) { }


  private apiUrl='https://gdtc-training-api.azurewebsites.net/api/hospital/block'


  getBlock():Observable<getBlock[]>{
    return this.http.get<getBlock[]>(`${this.apiUrl}`)
  }

  postBlock(postBlock:postBlock):Observable<postBlock>{
    return this.http.post<postBlock>(`${this.apiUrl}`,postBlock)
  }

  updateBlock(updateBlock:updateBlock):Observable<postBlock>{
    return this.http.put<updateBlock>(`${this.apiUrl}`,updateBlock)
  }

  deleteBlock(deleteBlock:updateBlock):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}`,{
      body:deleteBlock
    })
  }
}
