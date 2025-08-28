import { Component, Inject, OnInit } from '@angular/core';
import { PhysicianService } from '../../../core/services/physician/physician.service';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdatePhysician } from '../../../core/models/physician/update-physician';
import { GetPhysician } from '../../../core/models/physician/get-physician';
@Component({
  selector: 'app-edit-physician',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatDialogModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './add-edit-physician-dialog.component.html',
  styleUrl: './add-edit-physician-dialog.component.css'
})
export class AddEditPhysicianDialogComponent implements OnInit {
  public physicianForm!: FormGroup
  public physicianId?: number
  public name: string = ''
  public position: string = ''
  public isEditMode = false
  constructor(private fb: FormBuilder, private PhysicianService: PhysicianService, private dialogRef: MatDialogRef<AddEditPhysicianDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: GetPhysician) { }
  ngOnInit() {
    if (this.data) {
      this.isEditMode = true
    }
    this.physicianForm = this.fb.group({
      name: [this.data ? this.data.name : '', Validators.required],
      position: [this.data ? this.data.position : '', Validators.required]
    })
  }

  public onSubmit() {
    if (this.physicianForm.valid) {
      if (this.isEditMode) {
        this.dialogRef.close({
          physicianId: this.data.physicianId,
          ...this.physicianForm.value
        })
      }
      else {
        this.dialogRef.close(this.physicianForm.value)
      }
    }
  }

  public cancel() {
    this.dialogRef.close();
  }
}
