import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from './components/recipes-list/recipes-list.component';
import {RecipeComponent} from './components/recipe/recipe.component';
const routes: Routes = [
  {path: '', component: RecipesListComponent},
  {path: 'recipe', component: RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
