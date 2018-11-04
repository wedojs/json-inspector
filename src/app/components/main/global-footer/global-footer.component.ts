import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.css']
})
export class GlobalFooterComponent implements OnInit {

  constructor(private cs: CommonService, private _electronService: ElectronService) { }

  ngOnInit() {
  }

  gotoSayantanGithub() {
    this._electronService.shell.openExternal(this.cs.sayantanGithubUrl)
  }

  gotoProjetGithubPage() {
    this._electronService.shell.openExternal(this.cs.projectGithubPageUrl)
  }

  gotoDownloadPage() {
    this._electronService.shell.openExternal(this.cs.downloadPageUrl)
  }

  gotoAboutPage() {
    this._electronService.shell.openExternal(this.cs.aboutPageUrl)
  }

}
