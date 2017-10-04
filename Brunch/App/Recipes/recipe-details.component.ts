import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { IMenu } from './menu';

@Component({
    templateUrl: 'App/Recipes/recipe-details.component.html',    
    styleUrls: ['App/Recipes/recipe-details.component.css']
})

export class RecipeDetailsComponent {
    menu: IMenu[];
    errorMessage: string;
    imageWidth: number = 150;
    imageMargin: number = 2;
    private sub: Subscription;
    recipeID: number;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private _recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                this.recipeID = +params['id']
                let menuid = +params['menuId'];
                this.getMenuDesc(menuid);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getMenuDesc(menuID: number) {
        this._recipeService.getMenuDesc(menuID).subscribe(
            menu => this.menu = menu,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/recipe', this.recipeID]);
    }
}