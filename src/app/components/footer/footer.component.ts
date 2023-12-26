import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public mobileFooterContents = [
    [
      "Delivery",
      "Returns & Refunds",
      "Order Tracker",
      "Help",
      "Store Finder",
      "adiclub",
      "adiclub terms and conditions"
    ]
  ]

  public desktopFooterContents =
    [
      {
        categories: "PRODUCTS",
        subCategories: [
          "Footwear",
          "Clothing",
          "Accessories",
          null,
          "Outlet – Sale",
          "New Arrivals",
          "Special Offer",
          "Flat 50% Off!"
        ]
      },
      {
        categories: "SPORTS",
        subCategories: [
          "Cricket",
          "Running",
          "Football",
          "Gym/Training",
          "Tennis",
          "Outdoor",
          "Basketball",
          "Swimming",
          "Skateboarding"
        ]
      },
      {
        categories: "COLLECTIONS",
        subCategories: [
          "Ultraboost",
          "Superstar",
          "NMD",
          "Stan Smith",
          "Sustainability",
          "Predator",
          "Parley",
          "adicolor"
        ]
      },
      {
        categories: "SUPPORT",
        subCategories: [
          "Help",
          "Customer Services",
          "Returns & Exchanges",
          "Shipping",
          "Order Tracker",
          "Store Locator",
          "Running Shoe Finder",
          "Bra Fit Guide",
          "adiclub",
          "adiclub Terms and conditions"
        ]
      },
      {
        categories: "COMPANY INFO",
        subCategories: [
          "About Us",
          "adidas stories",
          "adidas Apps",
          "Entity Details",
          "Press",
          "Careers"
        ]
      }
    ]
Join: any;
}
