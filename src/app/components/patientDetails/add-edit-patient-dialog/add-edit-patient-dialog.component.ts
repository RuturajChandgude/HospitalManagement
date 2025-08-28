import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetPatient } from '../../../core/models/patient/get-patient';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-patient-dialog',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './add-edit-patient-dialog.component.html',
  styleUrl: './add-edit-patient-dialog.component.css'
})
export class AddEditPatientDialogComponent implements OnInit {
  public patientform!: FormGroup
  public isEditMode = false
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddEditPatientDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: GetPatient) { }
  ngOnInit() {
    if (this.data) {
      this.isEditMode = true
    }
    this.patientform = this.fb.group({
      name: [this.data ? this.data.name : '', Validators.required],
      address: [this.data ? this.data.address : '', Validators.required],
      phone: [this.data ? this.data.phone : '', Validators.required],
    })
  }

  public onSubmit() {
    if (this.patientform.valid) {
      if (this.isEditMode) {
        this.dialogRef.close({
          patientId: this.data.patientId,
          ...this.patientform.value
        })
      }
      else {
        this.dialogRef.close(this.patientform.value)
      }
    }
  }
}
