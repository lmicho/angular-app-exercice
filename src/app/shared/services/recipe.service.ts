import { Recipe } from '../../recipes/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Soupe aux lardons et au chou',
            'Meilleure soupe au monde',
            'https://content.joseedistasio.ca/app/uploads/2019/09/28225840/SOUPES_lardons-999x1501.jpg'
        ),
        new Recipe(
            'Potage parmentier chou-fleur et cheddar',
            'Aussi la meilleure soupe au monde',
            'https://content.joseedistasio.ca/app/uploads/2019/09/28225733/parmentier-choufleur-999x1501.jpg'
        )
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice()
    }
}