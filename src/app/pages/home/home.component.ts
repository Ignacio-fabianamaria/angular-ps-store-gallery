import { Component, Input, OnInit } from '@angular/core';
import { slideConfig } from 'src/app/data/configs';
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
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  @Input()
  gameLink:string = ""
  @Input()
  cardData:any[] = []
  @Input()
  config:{}=slideConfig

  constructor() { }

  ngOnInit(): void {
    this.cardData = dataFake
    console.log(this.cardData);

  }

}
