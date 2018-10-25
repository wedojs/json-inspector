import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.css']
})
export class GlobalFooterComponent {

  constructor(private electronService: ElectronService, private cs: CommonService) { }

  gotoGithubProfile() {
    this.electronService.shell.openExternal(this.cs.githubProfileUrl)
  }

  gotoProjectGithubPage() {
    this.electronService.shell.openExternal(this.cs.projectGithubUrl)
  }

}
