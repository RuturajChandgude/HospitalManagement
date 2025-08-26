import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlockComponent } from './add-edit-block-dialog';

describe('EditBlockComponent', () => {
  let component: EditBlockComponent;
  let fixture: ComponentFixture<EditBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
