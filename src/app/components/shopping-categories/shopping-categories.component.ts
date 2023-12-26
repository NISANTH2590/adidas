import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-categories',
  standalone: true,
  imports: [],
  templateUrl: './shopping-categories.component.html',
  styleUrl: './shopping-categories.component.scss'
})
export class ShoppingCategoriesComponent {
  public categories = [
    {
      title:"Women",
      url:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_730,w_730/fw23_brand_campaign_launch_hp_gender_visual_nav_womens_d_366dcb0b23.jpg"
    },
    {
      title:"Men",
      url:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_730,w_730/fw23_brand_campaign_launch_hp_gender_visual_nav_mens_d_2201b003ba.jpg"
    },
    {
      title:"Kids",
      url:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_730,w_730/fw23_brand_campaign_launch_hp_gender_visual_nav_kids_d_494e8c20d2.jpg"
    }
  ]
}
