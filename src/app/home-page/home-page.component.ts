import { Component, NgZone, ViewChild, ViewContainerRef } from '@angular/core';
import { SkillsPageComponent } from '../skills-page/skills-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  @ViewChild('skillsDynamicContainer', {read: ViewContainerRef})
  container!: ViewContainerRef;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.container.clear();
    const skillsPageComponent = this.container.createComponent(SkillsPageComponent);
    skillsPageComponent.instance.skills = ["Angular", 'Typescript', 'Javascript'];
    console.log(skillsPageComponent.instance);
    skillsPageComponent.instance.buttonClickedEvent.subscribe((event) => {
      this.zone.run(() => {
      console.log("inside parent subscribe", event);
      alert(event);
    });
    skillsPageComponent.changeDetectorRef.detectChanges();
    })
  }
}
