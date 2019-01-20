import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  item;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.check();
  }

  onEdit() {
    this.createRecipe();
    this.check();
    this.item[0].id = null;
    console.log(this.item);

  }

  createRecipe() {
    const d = new Date();
    this.item[0].cur_version.date = [d.getDate(), d.getMonth(), d.getFullYear()];
  }

  check() {
    this.item = this.recipeService.item;
  }
}
