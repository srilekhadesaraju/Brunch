import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { IMenu } from './menu';
import {RecipeFilterPipe} from './recipe-filter.pipe'

@Component({
    templateUrl: 'App/Recipes/menu-list.component.html',
    styleUrls: ['App/Recipes/menu-list.component.css'],
    pipes: [RecipeFilterPipe]
})

export class MenuListComponent {
    menu: IMenu[];
    errorMessage: string;
    imageWidth: number = 150;
    imageHeight: number = 100;
    imageMargin: number = 2;
    private sub: Subscription;
    listFilter: string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private _recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getMenuList(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getMenuList(id: number) {
        this._recipeService.getFilteredMenuList(id).subscribe(
            menu => this.menu = menu,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/recipes']);
    }
    
}