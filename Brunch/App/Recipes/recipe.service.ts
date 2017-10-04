import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';
import { IMenu } from './menu';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {
    private _recipeUrl = 'Api/Recipes/recipes.json';
    private _menuUrl = 'Api/Recipes/menu.json';
    constructor(private _http: Http) { }

    getRecipes(): Observable<IRecipe[]> {
        return this._http.get(this._recipeUrl)
            .map((response: Response) => <IRecipe[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    getMenuList(): Observable<IMenu[]> {
        return this._http.get(this._menuUrl)
            .map((response: Response) => <IMenu[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getFilteredMenuList(id: number): Observable<IMenu[]>  {
        return this.getMenuList()
            .map((listItems: IMenu[]) => listItems.filter(m => m.recipeNumber === id));
    }

    getMenuDesc(menuId: number): Observable<IMenu[]>  {
        return this.getMenuList()
            .map((listItems: IMenu[]) => listItems.filter(m => m.menuID == menuId));
    }}