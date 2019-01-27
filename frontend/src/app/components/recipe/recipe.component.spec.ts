import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeComponent} from './recipe.component';
import {RecipeService} from '../../services/recipe.service';
import {RecipeMockService} from '../../services/recipe.mock.service';
import {FormsModule} from '@angular/forms';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RecipeComponent],
      providers: [
        {provide: RecipeService, useClass: RecipeMockService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
