import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  Items: any = null;
  item;

  constructor(private http: HttpClient) {
  }

  getAllRecipes() {
    return this.http.get('http:/api/recipes').pipe(map(res => this.Items = res));
  }

  createNewRecipe(recipe) {
console.log(recipe);
    return this.http.post('http:/api/newRecipe', recipe).pipe(map(res => this.item = res));
  }

  editRecipe(recipe) {
    console.log(recipe);
    return this.http.put('http:/api/editRecipe', recipe).pipe(map(res => this.item = res));
  }

  updateCurrentItem(sendId) {
    if (sendId !== null) {
      this.item = this.Items.filter((item) => item._id === sendId)[0];
    } else {
      this.item = {
        editMode: true,
        _id: null,
        title: null,
        img: null,
        cur_version: {
          date: null,
          ingredients: [],
          recipe: null

        },
        prev_version: []
      };
    }
  }
}
