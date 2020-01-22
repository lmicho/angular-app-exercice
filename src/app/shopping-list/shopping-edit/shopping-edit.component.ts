import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  ingredients: Ingredient[] = [
    new Ingredient('Carottes', 2),
    new Ingredient('Pancetta', 3),
    new Ingredient('Bouillon de poulet', 1)
  ]

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  /**
   * Add ingredient to the shopping list
   * @return void
   */
  addIngredient(): void {
    const name = this.nameInputRef.nativeElement.value;
    const amount = parseInt(this.amountInputRef.nativeElement.value);
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
    this.clearInputs();
  }

  /**
  * Remove all ingredients from the shopping list
  * @return void
  */
  deleteAllIngredients(): void {
    this.shoppingListService.deleteAllIngredients();
  }

  /**
  * Clear inputs
  * @return void
  */
  clearInputs(): void {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

}
