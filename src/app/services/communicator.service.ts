import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  constructor() { }

  openDefaultEmailClient() {
    const to = 'info@klossitsolutions.com';
    const subject = '';

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  }

  openDefaultPhoneApp() {
    const phoneNumber = '+4915235834040';

    const telLink = `tel:${phoneNumber}`;

    window.location.href = telLink;
  }
}
