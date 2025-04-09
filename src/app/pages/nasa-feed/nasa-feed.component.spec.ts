import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaFeedComponent } from './nasa-feed.component';

describe('NasaFeedComponent', () => {
  let component: NasaFeedComponent;
  let fixture: ComponentFixture<NasaFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NasaFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
