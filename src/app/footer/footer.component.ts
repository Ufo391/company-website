import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  currentYear: string = "";

  ngOnInit() {
    let d: Date = new Date(Date.now());
    this.currentYear = d.getFullYear().toString();
  }

}