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
    console.log('check', this.item);
  }

  check() {
    this.item = this.recipeService.item;
  }
}
