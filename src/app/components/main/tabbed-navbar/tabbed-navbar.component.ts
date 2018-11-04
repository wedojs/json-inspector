import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbed-navbar',
  templateUrl: './tabbed-navbar.component.html',
  styleUrls: ['./tabbed-navbar.component.css']
})
export class TabbedNavbarComponent implements OnInit {

  tabs: Array<any>

  constructor() { }

  ngOnInit() {
    this.tabs = [
      {
        tabID: "1",
        tabText: "Tab111111",
        tabClass: "tab tab-selected"
      },
      {
        tabID: "2",
        tabText: "Tab2",
        tabClass: "tab"
      },
      {
        tabID: "3",
        tabText: "Tab3",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      },
      {
        tabID: "4",
        tabText: "Tab4",
        tabClass: "tab"
      }
    ]
  }

}
