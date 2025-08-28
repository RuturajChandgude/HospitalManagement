import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core/services/patient/patient.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletePatient } from '../../../core/models/patient/delete-patient';
import { GetPatient } from '../../../core/models/patient/get-patient';
import { UpdatePatient } from '../../../core/models/patient/update-patient';
import { AddEditPatientDialogComponent } from '../add-edit-patient-dialog/add-edit-patient-dialog.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-patient',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {
  public displayedColumns: string[] = ['patientId', 'name', 'address', 'phone', 'createdOn', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<GetPatient>();
  constructor(private patientService: PatientService, private dialog: MatDialog) { }
  ngOnInit() {
    this.loadData()
  }

  public loadData() {
    this.patientService.getPatient().subscribe((data) => {
      this.dataSource.data = data
    })
  }

  public openAddDialog() {
    const dialogRef = this.dialog.open(AddEditPatientDialogComponent, {
      width: '400px',
      height: '400px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.patientService.postPatient(result).subscribe(() => {
          this.loadData()
        })
      }
    })
  }

  public openEditDialog(patientUpdate?: UpdatePatient) {
    if (patientUpdate) {
      const dialogRef = this.dialog.open(AddEditPatientDialogComponent, {
        width: '400px',
        height: '400px',
        data: patientUpdate
      })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.patientService.updatePatient(result).subscribe(() => {
            this.loadData()
          })
        }
      })

    }
  }

  public delete(deletePatient: DeletePatient) {
    const confirmDelete = confirm('Are you sure you want to delete?')
    if (confirmDelete) {
      const body = {
        ...deletePatient
      }
      this.patientService.deletePatient(body).subscribe(() => {
        this.loadData()
      })
    }
  }
}
