import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMeterComponent } from './skill-meter.component';

describe('SkillMeterComponent', () => {
  let component: SkillMeterComponent;
  let fixture: ComponentFixture<SkillMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillMeterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
