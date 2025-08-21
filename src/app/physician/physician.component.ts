import { Component,OnInit  } from '@angular/core'; import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-physician',
  imports: [ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './physician.component.html',
  styleUrl: './physician.component.css'
})
export class PhysicianComponent implements OnInit {
myform!:FormGroup

constructor(private fb:FormBuilder){}

ngOnInit(){
this.myform=this.fb.group({
  name:['',Validators.required],
  position:['',Validators.required]
})
}


onSubmit(){
  if(this.myform.valid){
    console.log('Form submitted',this.myform.value)
  }
}
}
