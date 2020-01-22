import { Ingredient } from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('chou', 1),
        new Ingredient('bouillon de poulet', 3)
    ]

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }

}