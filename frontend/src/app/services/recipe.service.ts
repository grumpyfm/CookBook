import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  Items = [{
    id: '1',
    title: 'Cheddar Cookies',
    img: 'https://shefkuhar.com.ua/uploads/posts/2015-04/1428842408_na-moloc.jpg',
    cur_version: {
      date: '11/11/11',
      recipe: 'Cut The Butter Into Small Cubes And Blend Them In The Blender/Mixer Or Food Processor. ' +
        'Then Add The Cheese, Flour, Salt, Pepper Powder, Red Chilly Powder And Blend Again.Then Add The Egg Yolk, And Mix. ' +
        'Slowly Add The Water To Form A Dough. Roll The Dough Using Some Flour To Dust, Cut Into Small Cookies. ' +
        'Sprinkle Some Oregano Or Grated Cheese On Top And Bake Them At 180℃ , In A Preheated Oven For Just 10 Minutes.\n' +
        '\n' +
        'P.S : For The Eggless Version, Instead Of The Egg Yolk, Use 3 Tbsp Of Thick Buttermilk And Also Add 1/4th Tsp Of Baking Powder.'
    },
    prev_version: [{
      data: '09/11/11',
      recipe: 'Cut The Butter Into Small Cubes And Blend Them In The Blender/Mixer Or Food Processor. ' +
        'Then Add The Cheese, Flour, Salt, Pepper Powder, Red Chilly Powder And Blend Again.Then Add The Egg Yolk, And Mix. ' +
        'Slowly Add The Water To Form A Dough. Roll The Dough Using Some Flour To Dust, Cut Into Small Cookies. ' +
        'Sprinkle Some Oregano Or Grated Cheese On Top And Bake Them At 180℃ , In A Preheated Oven For Just 10 Minutes.\n' +
        '\n' +
        'P.S : For The Eggless Version, Instead Of The Egg Yolk, Use 3 Tbsp Of Thick Buttermilk And Also Add 1/4th Tsp Of Baking Powder.'
    }
    ]
  },
    {
      id: '2',
      title: 'Prosciutto, kale & butter bean stew',
      img: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/' +
        'recipe-image/2017/11/prosciutto-kale-butter-bean-stew.jpg?itok=eD-OyVk2',
      cur_version: {
        date: '09/11/11',
        ingredients: '80g pack prosciutto\n' +
          '\n' +
          ', torn into pieces\n' +
          '2 tbsp olive oil\n' +
          '\n' +
          '1 fennel bulb\n' +
          '\n' +
          ', sliced\n' +
          '2 garlic clove, crushed\n' +
          '1 tsp chilli flakes\n' +
          '4 thyme sprigs\n' +
          '150ml white wine or chicken stock\n' +
          '2 x 400g cans butter beans\n' +
          '400g can cherry tomatoes\n' +
          '200g bag sliced kale',
        recipe: 'Fry the prosciutto in a dry saucepan over a high heat until crisp, then remove ' +
          'half with a slotted spoon and set aside. Turn the heat down to low, pour in the oil and tip ' +
          'in the fennel with a pinch of salt. Cook for 5 mins until softened, then throw in the garlic, chilli ' +
          'flakes and thyme and cook for a further 2 mins, then pour in the wine or stock and bring to a simmer.\n' +
          '\n' +
          'Tip both cans of butter beans into the stew, along with their liquid, ' +
          'then add the tomatoes, season well and bring everything to a simmer. Cook, undisturbed, ' +
          'for 5 mins, then stir through the kale. Once wilted, ladle the stew into bowls, removing the ' +
          'thyme sprigs and topping each portion with the remaining prosciutto.'
      },
      prev_version: [{
        date: '09/11/11',
        ingredients: '80g pack prosciutto\n' +
          '\n' +
          ', torn into pieces\n' +
          '2 tbsp olive oil\n' +
          '\n' +
          '1 fennel bulb\n' +
          '\n' +
          ', sliced\n' +
          '2 garlic clove, crushed\n' +
          '1 tsp chilli flakes\n' +
          '4 thyme sprigs\n' +
          '150ml white wine or chicken stock\n' +
          '2 x 400g cans butter beans\n' +
          '400g can cherry tomatoes\n' +
          '200g bag sliced kale',
        recipe: 'Fry the prosciutto in a dry saucepan over a high heat until crisp, then remove ' +
          'half with a slotted spoon and set aside. Turn the heat down to low, pour in the oil and tip ' +
          'in the fennel with a pinch of salt. Cook for 5 mins until softened, then throw in the garlic, chilli ' +
          'flakes and thyme and cook for a further 2 mins, then pour in the wine or stock and bring to a simmer.\n' +
          '\n' +
          'Tip both cans of butter beans into the stew, along with their liquid, ' +
          'then add the tomatoes, season well and bring everything to a simmer. Cook, undisturbed, ' +
          'for 5 mins, then stir through the kale. Once wilted, ladle the stew into bowls, removing the ' +
          'thyme sprigs and topping each portion with the remaining prosciutto.'
      }
      ]
    }, {
      id: '3',
      title: 'Cheddar Cookies',
      img: 'https://shefkuhar.com.ua/uploads/posts/2015-04/1428842408_na-moloc.jpg',
      cur_version: {
        date: '11/11/11',
        recipe: 'Cut The Butter Into Small Cubes And Blend Them In The Blender/Mixer Or Food Processor. ' +
          'Then Add The Cheese, Flour, Salt, Pepper Powder, Red Chilly Powder And Blend Again.Then Add The Egg Yolk, And Mix. ' +
          'Slowly Add The Water To Form A Dough. Roll The Dough Using Some Flour To Dust, Cut Into Small Cookies. ' +
          'Sprinkle Some Oregano Or Grated Cheese On Top And Bake Them At 180℃ , In A Preheated Oven For Just 10 Minutes.\n' +
          '\n' +
          'P.S : For The Eggless Version, Instead Of The Egg Yolk, Use 3 Tbsp Of Thick Buttermilk And Also Add 1/4th Tsp Of Baking Powder.'
      },
      prev_version: [{
        data: '09/11/11',
        recipe: 'Cut The Butter Into Small Cubes And Blend Them In The Blender/Mixer Or Food Processor. ' +
          'Then Add The Cheese, Flour, Salt, Pepper Powder, Red Chilly Powder And Blend Again.Then Add The Egg Yolk, And Mix. ' +
          'Slowly Add The Water To Form A Dough. Roll The Dough Using Some Flour To Dust, Cut Into Small Cookies. ' +
          'Sprinkle Some Oregano Or Grated Cheese On Top And Bake Them At 180℃ , In A Preheated Oven For Just 10 Minutes.\n' +
          '\n' +
          'P.S : For The Eggless Version, Instead Of The Egg Yolk, Use 3 Tbsp Of Thick Buttermilk And Also Add 1/4th Tsp Of Baking Powder.'
      }]
    }, {
      id: '4',
      title: 'Cheddar Cookies',
      img: 'https://shefkuhar.com.ua/uploads/posts/2015-04/1428842408_na-moloc.jpg',
      cur_version: {
        date: '11/11/11',
        recipe: 'Cut The Butter Into Small Cubes And Blend Them In The Blender/Mixer Or Food Processor. ' +
          'Then Add The Cheese, Flour, Salt, Pepper Powder, Red Chilly Powder And Blend Again.Then Add The Egg Yolk, And Mix. ' +
          'Slowly Add The Water To Form A Dough. Roll The Dough Using Some Flour To Dust, Cut Into Small Cookies. ' +
          'Sprinkle Some Oregano Or Grated Cheese On Top And Bake Them At 180℃ , In A Preheated Oven For Just 10 Minutes.\n' +
          '\n' +
          'P.S : For The Eggless Version, Instead Of The Egg Yolk, Use 3 Tbsp Of Thick Buttermilk And Also Add 1/4th Tsp Of Baking Powder.'
      },
      prev_version: []
    }];
  item;

  constructor(private http: HttpClient) {
  }

  createNewRecipe() {
    console.log('createNewRecipe');
  }


  findItem(sendId) {
    console.log('findItem', sendId);
    if (sendId === null) {
      this.item = null;
    } else {
      this.item = this.Items.filter((item) => item.id === sendId);
      console.log('findRecipeById', this.item);
    }
  }
}
