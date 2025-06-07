import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit {

  userData: any = [];

  constructor(private apiSerivce: ApiService){}

  ngOnInit(): void{
    this.apiSerivce.getUserData().subscribe({
      next: (data) => this.userData = data,
      error: (err) => {
        console.error(err);
      }
    })
  }

}
