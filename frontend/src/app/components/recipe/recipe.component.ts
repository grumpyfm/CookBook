import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import * as cloneDeep from 'lodash/cloneDeep';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  item: Recipe;
  clone: Recipe;
  error = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.item = this.recipeService.item;
    this.clone = cloneDeep(this.item);
  }

  onEdit() {
    this.clone = cloneDeep(this.item);
    this.item.cur_version.date = new Date();
    this.item.editMode = true;
  }

  showPrev_version() {
    const t = (document.querySelector('.prev-version') as HTMLElement);
    if (t.style.display === 'block') {
      t.style.display = 'none';
    } else {
      t.style.display = 'block';
    }
  }

  onCancel() {
    this.item = this.clone;
    this.error = false;
  }

  onSave() {
    if (this.item._id === null) {
      this.createRecipe();
    } else {
      this.editRecipe();
    }
  }

  editRecipe() {
    const obj = {
      ingredients: this.clone.cur_version.ingredients,
      recipe: this.clone.cur_version.recipe
    };
    this.item.cur_version.date = new Date();
    this.item.editMode = false;
    if (typeof this.item.cur_version.ingredients === 'string') {
      this.item.cur_version.ingredients = this.item.cur_version.ingredients.split(',');
    }
    this.item.prev_version.push(obj);
    this.recipeService.editRecipe(this.item).subscribe((item: Recipe) => {
      this.item = item;
      this.clone = cloneDeep(this.item);
    });
  }

  createRecipe() {
    this.error = this.recipeService.checkIfExist(this.item.title);
    if (!this.error) {
      this.item.cur_version.date = new Date();
      this.item.editMode = false;
      this.item.cur_version.ingredients = this.item.cur_version.ingredients.split(',');
      this.recipeService.createNewRecipe(this.item).subscribe((item: Recipe) => {
        this.item = item;
        this.clone = cloneDeep(this.item);
      });
    }
  }
}
