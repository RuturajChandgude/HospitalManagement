import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetBlock } from '../../models/block/get-block';
import { CreateBlock } from '../../models/block/create-block';
import { UpdateBlock } from '../../models/block/update-block';
import { DeleteBlock } from '../../models/block/delete-block';
import { environment } from '../../../env/env';
@Injectable({
  providedIn: 'root'
})
export class BlockService {
  private apiUrl=`${environment.baseUrl}/block`

  constructor(private http:HttpClient) { }
  
  public getBlock():Observable<GetBlock[]>{
    return this.http.get<GetBlock[]>(`${this.apiUrl}`)
  }

  public postBlock(postBlock:CreateBlock):Observable<CreateBlock>{
    return this.http.post<CreateBlock>(`${this.apiUrl}`,postBlock)
  }

  public updateBlock(updateBlock:UpdateBlock):Observable<UpdateBlock>{
    return this.http.put<UpdateBlock>(`${this.apiUrl}`,updateBlock)
  }

  public deleteBlock(deleteBlock:DeleteBlock):Observable<void>{
    return this.http.request<void>('DELETE',`${this.apiUrl}`,{
      body:deleteBlock
    })
  }
}
