import { Component } from '@angular/core';
import { NavMenuBarComponent } from '../../nav-menu-bar/nav-menu-bar.component';
import { CommonModule } from '@angular/common';
import { SignalCommonService } from '../signal-common.service';

@Component({
  selector: 'app-version-17',
  standalone: true,
  imports: [NavMenuBarComponent,CommonModule],
  templateUrl: './version-17.component.html',
  styleUrl: './version-17.component.css'
})
export class Version17Component {

  constructor(public signalService: SignalCommonService){
    
  }

}
