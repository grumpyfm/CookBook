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

  createNewRecipe(info) {
    return this.http.post('http:/api/newRecipe', info).pipe(map(res => this.item = res));
    console.log('createNewRecipe');
  }


  updateCurrentItem(sendId) {
    if (sendId !== null) {
      this.item = this.Items.filter((item) => item.id === sendId)[0];
    } else {
      this.item = {
        editMode: true,
        id: null,
        title: null,
        img: null,
        cur_version: {
          date: null,
          ingredients: null,
          recipe: null

        },
        prev_version: null
      };
    }
  }
}
