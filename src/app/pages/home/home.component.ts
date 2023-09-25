import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  gameCover: string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType:string = "Digital PS4"
  @Input()
  gamePrice:string = "R$: 399,99"
  @Input()
  cardData:any[] = []

  constructor() { }

  ngOnInit(): void {
    this.cardData = dataFake
    console.log(this.cardData);

  }

}
