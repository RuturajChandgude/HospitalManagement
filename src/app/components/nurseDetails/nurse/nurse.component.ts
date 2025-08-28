import { Component,OnInit  } from '@angular/core'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { NurseService } from '../../../core/services/nurse/nurse.service';
import { GetNurse } from '../../../core/models/nurse/get-nurse';
import {MatTableModule} from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { UpdateNurse } from '../../../core/models/nurse/update-nurse';
import { AddEditNurseDialogComponent } from '../add-edit-nurse-dialog/add-edit-nurse-dialog.component';
import { DeleteNurse } from '../../../core/models/nurse/delete-nurse';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nurse',
  imports: [CommonModule,ReactiveFormsModule,MatTableModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatRadioModule],
  templateUrl: './nurse.component.html',
  styleUrl: './nurse.component.css'
})
export class NurseComponent implements OnInit {

displayedColumns: string[] = ['nurseId','name','position','registered','createdOn','edit','delete'];
dataSource= new MatTableDataSource<GetNurse>();

constructor(private nurseService:NurseService,private dialog:MatDialog){}

ngOnInit(){
this.loadNurse()
}

public loadNurse(){
this.nurseService.getNurse().subscribe((data)=>{
this.dataSource.data=data
})
}

public openAddDialog(){
  const dialogRef=this.dialog.open(AddEditNurseDialogComponent,{
    width:'400px',
    height:'400px'
  })

  dialogRef.afterClosed().subscribe(result=>{
    if(result){
      this.nurseService.postNurse(result).subscribe(()=>{
        this.loadNurse()
      })
    }
  })
}

public openEditDialog(nurseUpdate:UpdateNurse){
if(nurseUpdate){
  const dialogRef=this.dialog.open(AddEditNurseDialogComponent,{
    width:'350px',
    height:'350px',
    data:nurseUpdate

  })

  dialogRef.afterClosed().subscribe(result=>{
    if(result){
      this.nurseService.updateNurse(result).subscribe(()=>{
        this.loadNurse()
      })
    }
  })
}
}

public deleteNurse(nurse:DeleteNurse){
const confirmdata=confirm('Are you sure you want to delete?')
if(confirmdata){
 const body={
  nurseId:nurse.nurseId,
  name:nurse.name,
  position:nurse.position,
  registered:nurse.registered
 }

 this.nurseService.deleteNurse(body).subscribe(()=>{
  console.log('Deleted succesfully')
  this.loadNurse()
 })
}
}

}
