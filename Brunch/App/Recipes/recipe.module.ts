import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { MenuListComponent } from './menu-list.component';
import { RecipeFilterPipe } from './recipe-filter.pipe'


import { RecipeService } from './recipe.service';
import { recipeRouting } from './recipe.routing';
import { menuRouting } from './recipe.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        recipeRouting,
        menuRouting
    ],
    declarations: [
        RecipeListComponent,
        MenuListComponent,
        RecipeDetailsComponent,
        RecipeFilterPipe
    ],   
    providers: [RecipeService]
})
export class RecipeModule { }