import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-categories',
  standalone: true,
  imports: [],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent {
  public popularContents = [
    "samba",
    "running shoes men",
    "nmd",
    "backpack",
    "men sandals"
  ]
}
