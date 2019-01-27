import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeMockService {
  Items: any = null;
  hardcodedRecipes = [{
    _id: '5c4b7d7695f29e0f98d8cdac',
    cur_version: {
      ingredients: [
        'Cabbage',
        'rice',
        'tomato'
      ],
      date: new Date(),
      recipe: 'Mix, boil and something. Then call Puzata Hata and get your holubtsi!'
    },
    editMode: false,
    title: 'Holubtsi',
    img: 'https://shefkuhar.com.ua/uploads/posts/2017-07/1500651040_golubc-z-molodoyi-kapusti.jpg',
    prev_version: []
  }
  ];
  item: Recipe = this.hardcodedRecipes[0];

  getAllRecipes() {
    this.Items = this.hardcodedRecipes;
    return of(this.hardcodedRecipes);
  }

  createNewRecipe(recipe) {
    this.item = this.hardcodedRecipes[0];
    return of(this.hardcodedRecipes[0]);
  }

  editRecipe(recipe) {
    this.item = this.hardcodedRecipes[0];
    return of(this.hardcodedRecipes[0]);
  }

  checkIfExist(title) {
    return this.Items.filter((obj) => obj.title === title).length !== 0;
  }

  updateCurrentItem(sendId) {
    // do nothing here
  }
}
