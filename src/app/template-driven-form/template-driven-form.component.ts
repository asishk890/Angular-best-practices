import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']  
})
export class TemplateDrivenFormComponent {
  user = {
    num1: '',
    num2: ''
  };
  sum: Number  = 0;

  onSubmit(form: any) {
    if (form.valid) {
      this.sum = Number(this.user.num1) + Number(this.user.num2);
      console.log(this.sum);
    } else {
      console.log('Invalid Form');
    }
  }
}
