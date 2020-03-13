import { Component, OnInit } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

interface Assistant {
  [index: number]: {
    id: string;
    name: string;
    isAvailable: boolean;
  }
}

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.css']
})
export class AssistantsComponent implements OnInit {

  newColor = false;
  toggleColor() {
    this.newColor = !this.newColor;
  }
  stateFlag = false;

  toggleState() {
    this.stateFlag = !this.stateFlag;
  }

  styleChange() {

  }

  calculateClasses() {
    return {
      'mat-raised-button': true,
      'btn-extra-class': this.stateFlag
    };
  }

  assistants: Assistant = [
    { id: '1', name: 'Clark', isAvailable: true },
    { id: '2', name: 'Kim', isAvailable: false },
    { id: '3', name: 'Apiwat', isAvailable: false },
    { id: '4', name: 'Aya', isAvailable: false }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick() {

  }

}

