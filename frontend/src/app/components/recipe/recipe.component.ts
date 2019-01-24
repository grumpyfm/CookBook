import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  item;
  clone;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.item = this.recipeService.item;
    this.clone = Object.assign({}, this.item);

  }

  onEdit() {
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
  }

  saveRecipe() {
    if (this.item._id !== null) {
      const obj = {
        data: this.clone.cur_version.date,
        ingredients: this.clone.cur_version.ingredients,
        recipe: this.clone.cur_version.recipe
      };
      this.item.cur_version.date = new Date();
      this.item.editMode = false;
      this.item.prev_version.push(obj);
      this.recipeService.editRecipe(this.item).subscribe((item) => this.item = item);
    }
  }

  createRecipe() {
    this.item.cur_version.date = new Date();
    this.item.editMode = false;
    this.item.cur_version.ingredients = this.item.cur_version.ingredients.split(',');
    this.recipeService.createNewRecipe(this.item).subscribe((item) => this.item = item);
  }
}
