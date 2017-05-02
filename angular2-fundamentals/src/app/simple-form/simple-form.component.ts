import { Component, OnInit, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-simple-form',
  template: `
  <div>
  <input #myInput type="text">
  <button (click)="onClick(myInput.value)">Click me!</button>
  </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

    onClick(value) {
        console.log(value);
    }

  constructor(@Inject('mail') private mail) { }

  ngOnInit() {
  }

}
