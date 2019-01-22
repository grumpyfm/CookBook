import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  Items: any;

  constructor(private recipeService: RecipeService) {
  }

  loadRecipe = (id) => {
    this.recipeService.updateCurrentItem(id);
  }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe((Items) => this.Items = Items);
  }

}
