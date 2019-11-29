import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  timeStartInterval: number = 10;
  interval:number = 0;
  MessageText:string = "";

  start() {
    this.interval = setInterval(() => {
      if(this.timeStartInterval > 0) {
        this.timeStartInterval--;
        this.MessageText = "Counting...";
      } else {
        this.timeStartInterval = 10;
        this.MessageText = "Time's Up!!!";
      }
    },1000)
  }

  pause() {
    clearInterval(this.interval);
  }

}
