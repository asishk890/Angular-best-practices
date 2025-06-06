import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-temp-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './temp-form.component.html',
  styleUrl: './temp-form.component.css',
})
export class TempFormComponent {
  user = {
    name: '',
    email: '',
    country: '',
  };

  constructor(private userService: UserService) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      alert('Form submitted successfully');

      this.userService.submitFormData(this.user).subscribe({
        next: (response) => {
          console.log('Server response:', response);
          alert('Form submitted successfully');
        },
        error: (err) => {
          console.error('Error occurred:', err);
          alert('Something went wrong while submitting the form.');
        },
      });
    } else {
      const errors = [];

      if(form.controls['name']?.invalid){
        errors.push("Name is invalid");
      }
    }
  }
}
