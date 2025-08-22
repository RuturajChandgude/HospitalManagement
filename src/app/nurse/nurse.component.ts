import { Component,OnInit  } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-nurse',
  imports: [ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatRadioModule],
  templateUrl: './nurse.component.html',
  styleUrl: './nurse.component.css'
})
export class NurseComponent implements OnInit {
myform!:FormGroup

constructor(private fb:FormBuilder){}

ngOnInit(){
this.myform=this.fb.group({
  name:['',Validators.required],
  position:['',Validators.required],
  registered:['',Validators.required]
})
}

onSubmit(){
  if(this.myform.valid){
    console.log('Form submitted',this.myform.value)
  }
}
}
