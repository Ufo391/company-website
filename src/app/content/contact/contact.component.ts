import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMessage } from 'src/app/models/IMessage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  messageObj?: IMessage;
  lastInputMail?: string;
  lastInputName?: string;
  lastInputSubject?: string;
  lastInputMessage?: string;

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm): void {
    this.send(form.value);
    form.resetForm();
  }

  private send(msg: IMessage): void {
    console.log(msg);
  }
}