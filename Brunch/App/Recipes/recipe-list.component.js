"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_service_1 = require("./recipe.service");
var RecipeListComponent = (function () {
    function RecipeListComponent(_recipeService) {
        this._recipeService = _recipeService;
        this.imageWidth = 200;
        this.imageHeight = 200;
        this.imageMargin = 2;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._recipeService.getRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; }, function (error) { return _this.errorMessage = error; });
    };
    return RecipeListComponent;
}());
RecipeListComponent = __decorate([
    core_1.Component({
        selector: 'recipe',
        templateUrl: 'App/Recipes/recipe-list.component.html',
        styleUrls: ['App/Recipes/recipe-list.component.css']
    }),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map