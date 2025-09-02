import { Component, EventEmitter, Output } from '@angular/core';

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
  onButtonClick () {
    console.log("inside onButtonClick")
    this.buttonClickedEvent.emit('Button Clicked');
  }
}
