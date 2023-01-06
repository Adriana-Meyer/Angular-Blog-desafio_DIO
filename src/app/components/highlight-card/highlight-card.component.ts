import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.css']
})

export class HighlightCardComponent implements OnInit {
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
