import { Component,OnInit  } from '@angular/core'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PhysicianService } from '../../../core/services/physician/physician.service';
import { GetPhysician } from '../../../core/models/physician/get-physician';
import { UpdatePhysician } from '../../../core/models/physician/update-physician';
import {MatTableModule} from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
 import { EditPhysicianComponent } from '../add-edit-physician-dialog/add-edit-physician-dialog.component';
import { CreatePhysician } from '../../../core/models/physician/create-physician';
import { DeletePhysician } from '../../../core/models/physician/delete-physician';
@Component({
  selector: 'app-physician',
  imports: [MatDialogModule,MatTableModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './physician.component.html',
  styleUrl: './physician.component.css'
})
export class PhysicianComponent implements OnInit {
public dataUpdate:UpdatePhysician[]=[]

public data:GetPhysician[]=[]

public tableData:GetPhysician[]=[]
public displayedColumns: string[] = ['physicianId','name','position','createdOn','edit','delete'];
public dataSource= new MatTableDataSource<GetPhysician>();

constructor(private PhysicianService:PhysicianService,private dialog:MatDialog){}

ngOnInit(){
this.loadData()
}


public loadData(){
 this.PhysicianService.getPhysican().subscribe((data)=>{
  this.dataSource.data=data
 })
}

public openAddDialog(){
  const dialogRef=this.dialog.open(EditPhysicianComponent,{
    width:'300px',
    height:'300px'
  })

  dialogRef.afterClosed().subscribe(result=>{
    if(result){
      this.PhysicianService.postPhysician(result).subscribe(()=>{
        this.loadData()
      })
    }
  })
}

public openEditDialog(physicianUpdate:UpdatePhysician){
if(physicianUpdate){
  const dialogRef=this.dialog.open(EditPhysicianComponent,{
    width:'400px',
    height:'400px',
    data:physicianUpdate

  })

  dialogRef.afterClosed().subscribe(result=>{
    if(result){
      this.PhysicianService.updatePhysician(result).subscribe(()=>{
        this.loadData()
      })
    }
  })

}
}

public deletePhysician(physician:DeletePhysician){
const confirmdelete=confirm('Are you sure you want to delete?')
if(confirmdelete){
  const body={
    physicianId:physician.physicianId,
    name:physician.name,
    position:physician.position
  }
  this.PhysicianService.deletePhysician(body).subscribe(()=>{
  console.log('Deleted succesfuly')
  this.loadData();
})
}
}

}
