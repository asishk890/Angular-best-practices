import { Component, signal, computed, effect } from '@angular/core';
import { NavMenuBarComponent } from '../../nav-menu-bar/nav-menu-bar.component';
import { SignalCommonService } from '../signal-common.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-version-16',
  standalone: true,
  imports: [NavMenuBarComponent,FormsModule],
  templateUrl: './version-16.component.html',
  styleUrl: './version-16.component.css',
})
export class Version16Component {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  newCountry = '';

  constructor(public signalService: SignalCommonService) {
    effect(() => {
      console.log('Count changed to:', this.count());
    });
  }
  increment() {
    this.count.update((c) => c + 1);
  }

  add() {
    if (this.newCountry.trim()) {
      // this.signalService.addCountry(this.newCountry.trim());
      this.newCountry = '';
    }
  }
}
