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
    this.createRecipeDate();
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

  createRecipeDate() {
    const d = new Date();
    this.item.cur_version.date = [d.getDate(), d.getMonth(), d.getFullYear()];
  }
}
