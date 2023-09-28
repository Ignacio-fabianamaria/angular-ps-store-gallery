import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.responsive.css']
})
export class HomeComponent implements OnInit {
  @Input()
  gameCover: string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  @Input()
  gameLink:string = ""
  @Input()
  cardData:any[] = []


  constructor() { }

  ngOnInit(): void {
    this.cardData = dataFake
    console.log(this.cardData);
  }
  leftClick (): void {
    const carouselContainer = document.querySelector('.home-carossel_container')as HTMLElement;
    if (carouselContainer) {
      carouselContainer.scrollLeft -= carouselContainer.offsetWidth
    }
  }
  rigthlCick (): void {
    const carouselContainer = document.querySelector('.home-carossel_container')as HTMLElement;
    if (carouselContainer) {
      carouselContainer.scrollLeft += carouselContainer.offsetWidth
    }
  }


}
