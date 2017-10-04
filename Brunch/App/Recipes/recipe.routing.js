"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var recipe_list_component_1 = require("./recipe-list.component");
var recipe_details_component_1 = require("./recipe-details.component");
var menu_list_component_1 = require("./menu-list.component");
exports.recipeRoutes = [
    { path: 'recipes', component: recipe_list_component_1.RecipeListComponent },
    { path: 'recipe/:id', component: menu_list_component_1.MenuListComponent },
];
exports.menuRoutes = [
    { path: 'recipe/:id/menu/:menuId', component: recipe_details_component_1.RecipeDetailsComponent }
];
exports.recipeRouting = router_1.RouterModule.forRoot(exports.recipeRoutes);
exports.menuRouting = router_1.RouterModule.forChild(exports.menuRoutes);
//# sourceMappingURL=recipe.routing.js.map