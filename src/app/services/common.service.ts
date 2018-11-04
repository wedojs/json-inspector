import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  githubProfileUrl: string = "https://github.com/itsSayantan"
  projectGithubUrl: string = "https://github.com/itsSayantan/json-inspector"
}
