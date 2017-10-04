import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { MenuListComponent } from './menu-list.component';

export const recipeRoutes: Routes = [
    { path: 'recipes', component: RecipeListComponent },
    { path: 'recipe/:id', component: MenuListComponent },    
];

export const menuRoutes: Routes = [
    { path: 'recipe/:id/menu/:menuId', component: RecipeDetailsComponent }
];


export const recipeRouting: ModuleWithProviders = RouterModule.forRoot(recipeRoutes);
export const menuRouting: ModuleWithProviders = RouterModule.forChild(menuRoutes);
