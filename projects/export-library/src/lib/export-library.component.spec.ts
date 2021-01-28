import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLibraryComponent } from './export-library.component';

describe('ExportLibraryComponent', () => {
  let component: ExportLibraryComponent;
  let fixture: ComponentFixture<ExportLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
