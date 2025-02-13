import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  allNum = {
    num1: "",
    num2: ""
  }
  sum: number = 0
  onSubmit(tempForm: any) {
    if(tempForm.valid){
      console.log(this.allNum.num1);
    }
    this.sum = Number(this.allNum.num1) + Number(this.allNum.num2);
    console.log(this.allNum.num1);
  }

}
