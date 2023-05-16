import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftSkillsComponent } from './hard-soft-skills.component';

describe('HardSoftSkillsComponent', () => {
  let component: HardSoftSkillsComponent;
  let fixture: ComponentFixture<HardSoftSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardSoftSkillsComponent]
    });
    fixture = TestBed.createComponent(HardSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
