import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuBarComponent } from '../nav-menu-bar/nav-menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavMenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
