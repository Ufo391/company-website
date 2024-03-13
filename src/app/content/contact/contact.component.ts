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
import { ViewportService } from 'src/app/services/viewport.service';
import {
  attentionAnimation,
  attentionAnimationInMs,
  attentionRotateAnimation,
  opacityAnimation,
} from '../content.animation';
import { HtmlFormatterService } from 'src/app/services/html-formatter.service';
import { STYLES_CONTACT as STYLE } from './contact.styles';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [opacityAnimation, attentionAnimation, attentionRotateAnimation],
})
@UntilDestroy()
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;

  messageObj?: IMessage;
  lastInputMail?: string;
  lastInputName?: string;
  lastInputSubject?: string;
  lastInputMessage?: string;
  fadeinAnimationState = 'off';
  attentionAnimationState = 'off';
  hoverOverState: number = 0;
  isOfferDialogVisible: boolean = false;
  offerDialogDesc: string = '';
  dialogStyle: object = {};

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService,
    public vpService: ViewportService,
    private fService: HtmlFormatterService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      this.startFadeAnimation.bind(this),
      this.leaveFadeAnimation.bind(this),
      () => {},
      () => {}
    );
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.contact.title);
      this.offerDialogDesc = this.fService.formatTextToHtml(
        c.contact.offerDialog.value,
        ['font-bold']
      );
    });
    this.vpService.breakPoint$.pipe(untilDestroyed(this)).subscribe((v) => {
      if (v === 'xl') {
        this.dialogStyle = { width: STYLE.DIALOG_W_XL };
      } else {
        this.dialogStyle = { width: STYLE.DIALOG_W_nXL };
      }
    });
    setInterval(() => {
      this.attentionAnimationState =
        this.attentionAnimationState === 'off' ? 'on' : 'off';
    }, attentionAnimationInMs);
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
    const location: string =
      this.lService.MasterData$.value.contact.values.find(
        (c) => c.type === 'location'
      )?.value.value!;
    const mapsLink = `https://www.google.com/maps?q=${encodeURIComponent(
      location
    )}`;

    window.open(mapsLink, '_blank');
  }

  hoverOverHandler(id: number): void {
    this.hoverOverState = id;
  }

  showOfferDialog(): void {
    this.isOfferDialogVisible = true;
  }

  private startFadeAnimation(): void {
    this.fadeinAnimationState = 'on';
  }

  private leaveFadeAnimation(): void {
    this.fadeinAnimationState = 'off';
  }
}
