import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BlockService } from '../../services/block.service';
import {MatTableModule} from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { getBlock, updateBlock } from '../../models/block';
import { EditBlockComponent } from '../edit-block/edit-block.component';
@Component({
  selector: 'app-block',
  imports: [ReactiveFormsModule,MatTableModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent implements OnInit {
  myform!:FormGroup
  displayedColumns: string[] = ['blockId','blockFloor','blockCode','createdOn','edit','delete'];
  dataSource= new MatTableDataSource<getBlock>();
  constructor(private fb:FormBuilder,private blockService:BlockService,private dialog:MatDialog){}
  ngOnInit() {
    this.myform=this.fb.group({
      blockFloor:['',Validators.required],
      blockCode:['',Validators.required]
    })


    this.load_data()
  }


  load_data(){
    this.blockService.getBlock().subscribe((data)=>{
      this.dataSource.data=data
    })
  }


  openEditDialog(block:getBlock){
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
        const new_updated_data:updateBlock={
          blockId:updatedData.blockId,
          blockFloor:updatedData.blockFloor,
          blockCode:updatedData.blockCode,

        }
        this.blockService.updateBlock(new_updated_data).subscribe(()=>{
          this.load_data()
        })
      }

    })
  }

  deleteBlock(block:getBlock){
  const confirmData=confirm('Are you sure you want delete?')
  if(confirmData){
    const body={
      blockId:block.blockId,
      blockFloor:block.blockFloor,
      blockCode:block.blockCode,

    }
   this.blockService.deleteBlock(body).subscribe(()=>{
    this.load_data()
   })

  }
  }
  onSubmit(){
    if(this.myform.valid){
      this.blockService.postBlock(this.myform.value).subscribe(()=>{
        console.log("Block data submitted")
        this.load_data()
      })
    }
  }
}
