import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  pointer: number = 0;
  currentStyle: object = {};
  cardStyles = [
    { background: '#daeaf0' },
    { background: '#9fb1c5' },
    { background: '#b2bccd' },
  ];
  currentSubtitle: string = '';
  subtitles: string[] = ['Expertise', 'Beratung', 'Entwicklung'];
  currentDescription: string = '';
  descriptions: string[] = [
    "Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!",
    "Neuentwicklung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!",
    "Legacy Code. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!"
  ]
  isFirstElement: boolean = false;
  isLastElement: boolean = false;

  constructor() {}

  ngOnInit() {
    this.onPointerChanged();
  }

  clickNextItemHandler(): void {
    this.pointer = this.pointer + 1;
    if (this.pointer >= this.cardStyles.length) {
      this.pointer = 0;
    }
    this.onPointerChanged();
  }

  clickLastItemHandler(): void {
    this.pointer = this.pointer - 1;
    if (this.pointer < 0) {
      this.pointer = this.cardStyles.length - 1;
    }
    this.onPointerChanged();
  }

  private onPointerChanged(): void {
    this.currentStyle = this.cardStyles[this.pointer];
    this.currentSubtitle = this.subtitles[this.pointer];
    this.currentDescription = this.descriptions[this.pointer];
    this.isFirstElement = this.pointer === 0;
    this.isLastElement = this.pointer === this.descriptions.length - 1;
  }
}
