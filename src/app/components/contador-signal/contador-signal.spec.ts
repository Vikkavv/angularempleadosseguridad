import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorSignal } from './contador-signal';

describe('ContadorSignal', () => {
  let component: ContadorSignal;
  let fixture: ComponentFixture<ContadorSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
