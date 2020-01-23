import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../ingredient.model';
import { Subject} from 'rxjs';
export class RecipeService {

    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Soupe aux lardons et au chou',
            'Meilleure soupe au monde',
            'https://content.joseedistasio.ca/app/uploads/2019/09/28225840/SOUPES_lardons-999x1501.jpg',
            [
                new Ingredient('ail', 2),
                new Ingredient('chou', 1),
                new Ingredient('poireau', 1)
            ]
        ),
        new Recipe(
            'Potage parmentier chou-fleur et cheddar',
            'Aussi la meilleure soupe au monde',
            'https://content.joseedistasio.ca/app/uploads/2019/09/28225733/parmentier-choufleur-999x1501.jpg',
            [
                new Ingredient('choufleur', 2),
                new Ingredient('cheddar', 1),
                new Ingredient('bouillon de poulet', 1)
            ]
        )
    ];

    /**
     * Return all the recipies
     * @return Recipe[]
     */
    getRecipes(): Recipe[] {
        return this.recipes.slice()
    }

    /**
     * Return a recipe by id
     * @return Recipe
     */
    getRecipe(index: number) {
        return this.recipes.slice()[index]
    }
}