import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'multiplefileuploadfrontend';
  public isCreateActive: boolean = true;

  changeActiveLink () {
    this.isCreateActive = !this.isCreateActive;
  }
}
