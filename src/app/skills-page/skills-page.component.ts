import { Component, EventEmitter, NgZone, Output } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss'
})
export class SkillsPageComponent {
  skills: string[] = [];
  @Output() buttonClickedEvent = new EventEmitter();
  
  constructor(private zone: NgZone) {}
  onButtonClick () {
    console.log("inside onButtonClick")
    this.zone.run(() => {
      this.buttonClickedEvent.emit('Child button clicked');
    });
  }
}
