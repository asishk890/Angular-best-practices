import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  status: string = 'approved';
  user = [
    {
      id: 1,
      name: "Ramesh"
    },
    {
      id: 2,
      name: "Suresh"
    }
  ]
  users: any = []
  
}
