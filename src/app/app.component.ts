import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterBottomComponent } from './components/footer-bottom/footer-bottom.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClothContentComponent } from './components/cloth-content/cloth-content.component';
import { HotSectionComponent } from './components/hot-section/hot-section.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { ShoppingCategoriesComponent } from './components/shopping-categories/shopping-categories.component';
import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { StillInterestedComponent } from './components/still-interested/still-interested.component';
import { EndOfSeasonComponent } from './components/end-of-season/end-of-season.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/header/sub-header/sub-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterBottomComponent,FooterComponent,ClothContentComponent,HotSectionComponent,NewArrivalsComponent,ShoppingCategoriesComponent,PopularCategoriesComponent,StillInterestedComponent,EndOfSeasonComponent,BannerComponent,HeaderComponent,SubHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adidas';
}
