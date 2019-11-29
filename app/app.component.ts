import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practiceThree';

  getTitle() {
    return this.title;
  }

  transferString:string = this.title;

}
