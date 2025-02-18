import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerElementComponent } from './corner-element.component';

describe('CornerElementComponent', () => {
  let component: CornerElementComponent;
  let fixture: ComponentFixture<CornerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CornerElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CornerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
