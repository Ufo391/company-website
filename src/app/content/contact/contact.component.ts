import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMessage } from 'src/app/models/IMessage';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('title', { static: true }) myElement!: ElementRef;

  messageObj?: IMessage;
  lastInputMail?: string;
  lastInputName?: string;
  lastInputSubject?: string;
  lastInputMessage?: string;

  constructor(private chapterService: ChapterService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(this.myElement);
  }

  onSubmit(form: NgForm): void {
    this.send(form.value);
    form.resetForm();
  }

  private send(msg: IMessage): void {
    console.log(msg);
  }
}
