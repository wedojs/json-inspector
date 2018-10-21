import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // `selection` denotes the option selected at the first time of app launch
  // -1 denotes that the checkbox was never selected,
  // 0 denotes that checkbox is selected but not sure which app is selected,
  // 1 denotes that Viewer was selected,
  // 2 denotes that diff was selected
  selection:number = -1

  constructor() {
    this.selection = Number(localStorage.getItem("selection"))
    console.log(this.selection)

    // automatically route to app 1 or 2 if this.selection is not equal to -1
    if(typeof localStorage.getItem("selection") !== "undefined" && this.selection !== -1)
      alert(this.selection)
  }

  toggleRemember() {
    if(this.selection === 0) {
      this.selection = -1
    } else {
      this.selection = 0
    }
  }

  navClickMiddleWare(selectedApp) {
    // update the `selection` variable if checkbox is selected
    
    if(this.selection === 0) {
      // checkbox is selected
      this.selection = Number(selectedApp)

      localStorage.setItem("selection", selectedApp.toString())

      // pass control to respective app
    } else {
      localStorage.setItem("selection", "-1")

      // pass control to respective app
    }
  }
}
