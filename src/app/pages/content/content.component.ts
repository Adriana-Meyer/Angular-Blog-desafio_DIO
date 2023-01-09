import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string ="https://acessocultural.com.br/wp-content/uploads/2019/04/pokemon.jpg"
  @Input()
  contentTitle:string ="Pikachu decide virar detive"
  @Input()
  contentDescription:string =""
  @Input()
  contentDate:string ="Janeiro, 2022"

  constructor() { }

  ngOnInit(): void {
  }

}
