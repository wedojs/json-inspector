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
      }
    ]
  }

  findTabByID(tabID) {
    return this.tabs.filter(e => e.tabID === tabID)[0]
  }

  checkIfTabSelected(tab) {
    return tab.tabClass.split(" ")[1] === "tab-selected"
  }

  deleteTab(tabID) {

    if (this.tabs.length === 1) {
      // its time to close the entire window,
      // so give the user some message and stuff

      console.log("json-inspector is about to close")
    } else {
      let tabToBeDeleted = this.findTabByID(tabID)
      let indexOfTheTabToBeDeleted = this.tabs.indexOf(tabToBeDeleted)
      let isThisTabTheSelectedTab = this.checkIfTabSelected(tabToBeDeleted)

      // remove item from the `tabs` array
      if (typeof tabToBeDeleted == "undefined") {
        console.log("Tab not found with given ID")
      } else {
        this.tabs.splice(indexOfTheTabToBeDeleted, 1)
      }

      // make the adjacent tab (the tab to the right) the `tab-selected`
      // if the currently deleted tab was the selected tab
      if (this.tabs.length != 0 && isThisTabTheSelectedTab) {
        // in this case the `indexOfTheTabToBeDeleted` variable contains the index
        // of the adjacent tab as it has shifted left by 1 position automatically
        // because of splice operation

        if (typeof this.tabs[indexOfTheTabToBeDeleted] != "undefined") {
          this.tabs[indexOfTheTabToBeDeleted].tabClass = "tab tab-selected"
        }
      }
    }
  }

}
