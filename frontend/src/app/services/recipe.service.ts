import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Recipe} from '../model/recipe';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  Items: any = null;
  item: Recipe;

  constructor(private http: HttpClient) {
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get('http:/api/recipes').pipe(map((res: Recipe[]) => this.Items = res));
  }

  createNewRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post('http:/api/newRecipe', recipe).pipe(map((res: Recipe) => this.item = res));
  }

  editRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put('http:/api/editRecipe', recipe).pipe(map((res: Recipe) => this.item = res));
  }

  checkIfExist(title: string): boolean {
    return this.Items.filter((obj) => obj.title === title).length !== 0;
  }

  updateCurrentItem(sendId: string) {
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
