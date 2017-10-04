import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import {RecipeService} from './recipe.service'

@Component({
    selector: 'recipe',
    templateUrl: 'App/Recipes/recipe-list.component.html',
    styleUrls:['App/Recipes/recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
    imageWidth: number = 200;
    imageHeight: number = 200;
    imageMargin: number = 2;
    recipes: IRecipe[];
    errorMessage: string;

    constructor(private _recipeService: RecipeService){}
    ngOnInit(): void{
        this._recipeService.getRecipes()
            .subscribe(recipes => this.recipes = recipes,
            error => this.errorMessage = <any>error);

    }
}