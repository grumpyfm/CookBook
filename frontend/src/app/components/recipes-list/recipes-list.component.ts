import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../model/recipe';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  Items: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  loadRecipe = (id: string) => {
    this.recipeService.updateCurrentItem(id);
  }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe((Items: Recipe[]) => this.Items = Items);
  }

}
