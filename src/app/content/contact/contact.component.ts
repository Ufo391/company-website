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
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('meineAnimation', [
      state('aktiviert', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('deaktiviert', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('aktiviert <=> deaktiviert', [
        animate('0.5s')
      ])
    ])
  ]
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;

  messageObj?: IMessage;
  lastInputMail?: string;
  lastInputName?: string;
  lastInputSubject?: string;
  lastInputMessage?: string;

  animationStatus = 'aktiviert';

  toggleAnimation() {
    this.animationStatus = (this.animationStatus === 'aktiviert') ? 'deaktiviert' : 'aktiviert';
  }

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
