import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
