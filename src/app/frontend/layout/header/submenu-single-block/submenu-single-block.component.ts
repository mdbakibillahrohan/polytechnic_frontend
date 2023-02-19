import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu-single-block',
  templateUrl: './submenu-single-block.component.html',
  styleUrls: ['./submenu-single-block.component.css']
})
export class SubmenuSingleBlockComponent implements OnInit {

  constructor() { }
  @Input() title: String = "Default Title";
  @Input() items: any[] = [];
  ngOnInit(): void {
  }

}
