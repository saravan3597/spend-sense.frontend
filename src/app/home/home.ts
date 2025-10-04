import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isSidebarOpen: boolean = false;
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
