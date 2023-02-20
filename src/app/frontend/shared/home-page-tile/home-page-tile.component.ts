import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-tile',
  templateUrl: './home-page-tile.component.html',
  styleUrls: ['./home-page-tile.component.css']
})
export class HomePageTileComponent implements OnInit {

  constructor() { }
  @Input() title = "Default Title";
  @Input() links:any = [];
  @Input() imageName = "";
  ngOnInit(): void {
  }

}
