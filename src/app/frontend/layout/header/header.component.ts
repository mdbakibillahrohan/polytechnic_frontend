import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  aboutUs = {
    aboutInstitute: {
      title: "ইন্সটিটিউট সম্পর্কে",
      items: [
        {
          name: "ইন্সটিটিউটের পরিচিতি",
          route: "/aboutInstitute"
        },
        {
          name: "অবস্থান",
          route: "/aboutInstitute"
        },
        {
          name: "লক্ষ্য ও উদ্দেশ্য",
          route: "/aboutInstitute"
        },
        {
          name: "অর্নোগ্রাম",
          route: "/aboutInstitute"
        },
      ]
    },
    manPower: {
      title: "জনবল",
      items: [
        {
          name: "অধ্যক্ষ",
          route: "/aboutInstitute"
        },
        {
          name: "উপাধাক্ষ্য",
          route: "/aboutInstitute"
        },
        {
          name: "বিভাগীয় প্রধান",
          route: "/aboutInstitute"
        },
        {
          name: "ইন্সট্রাক্টর ও ওয়ার্কশপ সুপার",
          route: "/aboutInstitute"
        },
      ]
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
