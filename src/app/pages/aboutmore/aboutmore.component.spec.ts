import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmoreComponent } from './aboutmore.component';

describe('AboutmoreComponent', () => {
  let component: AboutmoreComponent;
  let fixture: ComponentFixture<AboutmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
