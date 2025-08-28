import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { GetOnCall } from '../../../core/models/onCall/get-on-call';
import { UpdateOnCall } from '../../../core/models/onCall/update-on-call';
import { OnCallService } from '../../../core/services/onCall/on-call.service';
import { OnCallDialogComponent } from '../on-call-dialog/on-call-dialog.component';

@Component({
  selector: 'app-on-call',
  imports: [CommonModule, MatButtonModule, MatTableModule, MatDialogModule],
  templateUrl: './on-call.component.html',
  styleUrl: './on-call.component.css'
})
export class OnCallComponent implements OnInit {
  public displayedColumns: string[] = ['onCallId', 'nurseId', 'nurseName', 'nursePosition', 'blockFloor', 'onCallStart', 'onCallEnd', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<GetOnCall>();
  constructor(private onCallService: OnCallService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData()
  }

  public loadData() {
    this.onCallService.getOnCall().subscribe((data) => {
      this.dataSource.data = data
    })
  }

  public openAddDialog() {
    const dialogRef = this.dialog.open(OnCallDialogComponent, {
      width: '470px',
      height: '470px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onCallService.postOnCall(result).subscribe(() => {
          this.loadData()
        })
      }
    })
  }


  public openEditDialog(onCallUpdate: UpdateOnCall) {
    if (onCallUpdate) {
      const dialogRef = this.dialog.open(OnCallDialogComponent, {
        width: '470px',
        height: '470px',
        data: onCallUpdate
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.onCallService.updateOnCall(result).subscribe(() => {
            this.loadData()
          })
        }
      })
    }
  }

  public delete(deleteOnCall: GetOnCall) {
    const confirmDelete = confirm('Are you sure you want to delete?')
    if (confirmDelete) {
      const body = {
        onCallId: deleteOnCall.onCallId,
        nurseId: deleteOnCall.nurse.nurseId,
        blockId: deleteOnCall.block.blockId,
        onCallStart: deleteOnCall.onCallStart,
        onCallEnd: deleteOnCall.onCallEnd
      }
      this.onCallService.deleteOnCall(body).subscribe(() => {
        this.loadData()
      })
    }
  }
}
