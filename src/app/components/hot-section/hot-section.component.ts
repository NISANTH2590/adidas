import { Component } from '@angular/core';

@Component({
  selector: 'app-hot-section',
  standalone: true,
  imports: [],
  templateUrl: './hot-section.component.html',
  styleUrl: './hot-section.component.scss'
})
export class HotSectionComponent {
  public hotSectionContents = [
    {
      url:"../../../assets/images/hot-1.avif",
      title:"Limited Collection Predstrike",
      content:"Crafted for goals"
    },
    {
      url:"../../../assets/images/hot-2.avif",
      title:"SUPERNOVA RISE",
      content:"SUPER COMFORT. SUPERNOVA."
    },{
      url:"../../../assets/images/hot-5.avif",
      title:"adidas by stella McCartney SS24",
      content:"A fresh take on workout staples"
    },
    {
      url:"../../../assets/images/hot-3.avif",
      title:"adidas x BCCI",
      content:"Chekout the collection"
    },{
      url:"../../../assets/images/hot4.avif",
      title:"adidas Spezial",
      content:"Introducing Spezial AW23:a story of contrasts and harmony"
    }
  ]
}
