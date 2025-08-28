import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BlockService } from '../../../core/services/block/block.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GetBlock } from '../../../core/models/block/get-block';
import { CommonModule } from '@angular/common';
import { AddEditBlockDialogComponent } from '../add-edit-block-dialog/add-edit-block-dialog';
import { UpdateBlock } from '../../../core/models/block/update-block';
import { DeleteBlock } from '../../../core/models/block/delete-block';

@Component({
  selector: 'app-block',
  imports: [CommonModule,ReactiveFormsModule, MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent implements OnInit {
  public displayedColumns: string[] = ['blockId', 'blockFloor', 'blockCode', 'createdOn', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<GetBlock>();

  constructor(private fb: FormBuilder, private blockService: BlockService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData()
  }

  public loadData() {
    this.blockService.getBlock().subscribe((data) => {
      this.dataSource.data = data
    })
  }

  public openAddDialog() {
    const dialogRef = this.dialog.open(AddEditBlockDialogComponent, {
      width: '350px',
      height: '350px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blockService.postBlock(result).subscribe(() => {
          this.loadData()
        })
      }
    })
  }

  public openEditDialog(blockUpdate: UpdateBlock) {
    if (blockUpdate) {
      const dialogRef = this.dialog.open(AddEditBlockDialogComponent, {
        width: '350px',
        height: '350px',
        data: blockUpdate

      })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.blockService.updateBlock(result).subscribe(() => {
            this.loadData()
          })
        }
      })

    }
  }

  public deleteBlock(block: DeleteBlock) {
    const confirmData = confirm('Are you sure you want delete?')
    if (confirmData) {
      const body = {
        blockId: block.blockId,
        blockFloor: block.blockFloor,
        blockCode: block.blockCode,

      }
      this.blockService.deleteBlock(body).subscribe(() => {
        this.loadData()
      })

    }
  }


}
