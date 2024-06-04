import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export default class LayoutComponent {
  mockMenu = [
    {
      id: 1,
      name: 'dashboard',
      path: '/dashboard',
    },
    {
      id: 1,
      name: 'dashboard',
      path: '/dashboard',
    },
    {
      id: 1,
      name: 'dashboard',
      path: '/dashboard',
    },
  ];
}
