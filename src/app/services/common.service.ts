import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sayantanGithubUrl: string = "https://github.com/itsSayantan"
  projectGithubPageUrl: string = "https://github.com/itsSayantan/json-inspector"
  downloadPageUrl: string = "https://github.com/itsSayantan/json-inspector"
  aboutPageUrl: string = "https://github.com/itsSayantan/json-inspector#json-inspector"
}
