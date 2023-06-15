import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePreferencesComponent } from './offline-preferences.component';

describe('OfflinePreferencesComponent', () => {
  let component: OfflinePreferencesComponent;
  let fixture: ComponentFixture<OfflinePreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinePreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflinePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
