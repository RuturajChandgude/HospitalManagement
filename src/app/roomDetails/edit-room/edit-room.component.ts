import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-edit-room',
  imports: [MatRadioModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.css'
})
export class EditRoomComponent {

}
