import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-others-card',
  templateUrl: './others-card.component.html',
  styleUrls: ['./others-card.component.css']
})
export class OthersCardComponent implements OnInit {
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:string =""
  @Input()
  cardDate:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
