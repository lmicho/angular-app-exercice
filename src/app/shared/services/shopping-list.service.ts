import { Ingredient } from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('chou', 1),
        new Ingredient('bouillon de poulet', 3)
    ]

    /**
     * Return the list of all the ingredient in the shopping list
     * @return ingredients[]
     */
    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    /**
     * Add ingredient to the shopping list
     * @param ingredient
     * @return void
     */
    addIngredient(ingredient: Ingredient): void {
        if (this.isIngredientExist(ingredient)) {
            const ingredientKey = Object.keys(this.ingredients).find(key => this.ingredients[key].name === ingredient.name)
            const totalOfIngrediant = this.ingredients[ingredientKey].amount + ingredient.amount;
            this.ingredients[ingredientKey].amount = totalOfIngrediant;
        } else {
            this.ingredients.push(ingredient)
        }
        this.ingredientsAdded.emit(this.ingredients.slice())
    }

    /**
     * Remove all ingredients from the shopping list
     * @return void
     */
    deleteAllIngredients(): void {
        this.ingredients = [];
        this.ingredientsAdded.emit(this.ingredients.slice())
    }

    /**
     * Validate if the ingredient is already in the shopping list
     * @param ingredient
     * @return boolean
     */
    isIngredientExist(currentIngredient: Ingredient) {
        return this.ingredients.some(ingredient => {
            return ingredient.name === currentIngredient.name;
        });
    }

}