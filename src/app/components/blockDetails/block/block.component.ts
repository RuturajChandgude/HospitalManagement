import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BlockService } from '../../../core/services/block/block.service';
import {MatTableModule} from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { GetBlock } from '../../../core/models/block/get-block';
import { UpdateBlock } from '../../../core/models/block/update-block';
import { EditBlockComponent } from '../add-edit-block-dialog/add-edit-block-dialog';
@Component({
  selector: 'app-block',
  imports: [ReactiveFormsModule,MatTableModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent implements OnInit {
  public blockForm!:FormGroup
  displayedColumns: string[] = ['blockId','blockFloor','blockCode','createdOn','edit','delete'];
  dataSource= new MatTableDataSource<GetBlock>();
  
  constructor(private fb:FormBuilder,private blockService:BlockService,private dialog:MatDialog){}

  ngOnInit() {
    this.blockForm=this.fb.group({
      blockFloor:['',Validators.required],
      blockCode:['',Validators.required]
    })
    this.loadData()
  }
  
  public loadData(){
    this.blockService.getBlock().subscribe((data)=>{
      this.dataSource.data=data
    })
  }

  public openEditDialog(block:GetBlock){
    const dialogRef=this.dialog.open(EditBlockComponent,{
      height: '300px',
    width: '300px',
    data:{
      blockId:block.blockId,
      blockFloor:block.blockFloor,
      blockCode:block.blockCode,

    }
    })
     dialogRef.afterClosed().subscribe(updatedData=>{
      if(updatedData){
        const new_updated_data:UpdateBlock={
          blockId:updatedData.blockId,
          blockFloor:updatedData.blockFloor,
          blockCode:updatedData.blockCode,

        }
        this.blockService.updateBlock(new_updated_data).subscribe(()=>{
          this.loadData()
        })
      }

    })
  }

  public deleteBlock(block:GetBlock){
  const confirmData=confirm('Are you sure you want delete?')
  if(confirmData){
    const body={
      blockId:block.blockId,
      blockFloor:block.blockFloor,
      blockCode:block.blockCode,

    }
   this.blockService.deleteBlock(body).subscribe(()=>{
    this.loadData()
   })

  }
  }

  public onSubmit(){
    if(this.blockForm.valid){
      this.blockService.postBlock(this.blockForm.value).subscribe(()=>{
        console.log("Block data submitted")
        this.loadData()
      })
    }
  }
}
