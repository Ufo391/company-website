import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IMessage } from 'src/app/models/IMessage';
import { ChapterService } from 'src/app/services/chapter.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [],
})
@UntilDestroy()
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;

  messageObj?: IMessage;
  lastInputMail?: string;
  lastInputName?: string;
  lastInputSubject?: string;
  lastInputMessage?: string;

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(this.myElement);
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.contact.title);
    });
  }

  openDefaultEmailClient() {
    const to = 'info@klossitsolutions.com';
    const subject = 'Anfrage';

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  }

  openDefaultPhoneApp() {
    const phoneNumber = '+4915235834040';

    const telLink = `tel:${phoneNumber}`;

    window.location.href = telLink;
  }

  openGoogleMaps() {
    const latitude = 51.902997;
    const longitude = 8.385755;
    const zoomLevel = 2;

    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoomLevel}`;

    window.location.href = mapsLink;
  }
}
