import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public currentIndex: number = 0;
  public displayHeader = true;
  public lastScrolledPos = 0;
  public promoContents: string[] = [
    "SIGN UP & GET 15% OFF",
    "FREE DELIVERY, FREE RETURNS",
    "UPI & NET BANKING AVAILABLE"
  ]

  @HostListener('document:scroll', ['$event'])
  scrollHandler(event: Event) {
    this.lastScrolledPos = window.scrollY;
  }
  constructor() { }

}
