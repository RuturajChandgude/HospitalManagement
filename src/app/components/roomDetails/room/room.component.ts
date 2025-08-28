import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../core/services/room/room.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { GetRoom } from '../../../core/models/room/get-room';
import { UpdateRoom } from '../../../core/models/room/update-room';
import { AddEditRoomDialogComponent } from '../add-edit-room-dialog/add-edit-room-dialog.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-room',
  imports: [CommonModule,MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  public displayedColumns: string[] = ['roomId', 'roomNumber', 'blockId', 'blockFloor', 'roomType', 'createdOn', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<GetRoom>();
  constructor(private roomService: RoomService, private dialog: MatDialog) { }
  ngOnInit() {
    this.loadData()
  }

  public loadData() {
    this.roomService.getRoom().subscribe((data) => {
      this.dataSource.data = data
    })
  }

  public openAddDialog() {
    const dialogRef = this.dialog.open(AddEditRoomDialogComponent, {
      width: '400px',
      height: '400px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.roomService.postRoom(result).subscribe(() => {
          this.loadData()
        })
      }
    })
  }

  public openEditDialog(roomUpdate: UpdateRoom) {
    if (roomUpdate) {
      const dialogRef = this.dialog.open(AddEditRoomDialogComponent, {
        width: '400px',
        height: '400px',
        data: roomUpdate
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.roomService.updateRoom(result).subscribe(() => {
            this.loadData()
          })
        }
      })
    }
  }

  public deleteRoom(roomDelete: GetRoom) {
    const confirmDelete = confirm('Are you sure you want to delete?')
    if (confirmDelete) {
      const body = {
        roomId: roomDelete.roomId,
        roomNumber: roomDelete.roomNumber,
        blockId: roomDelete.block.blockId,
        roomType: roomDelete.roomType,
        availability: roomDelete.availability
      }
      this.roomService.deleteRoom(body).subscribe(() => {
        this.loadData()
      })
    }
  }
}
