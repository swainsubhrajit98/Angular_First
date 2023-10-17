import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  constructor(){
    // setTimeout(()=>{
    //   this.title = "The new Title";
    // },2000)
  }
}
