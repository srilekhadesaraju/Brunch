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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var RecipeService = (function () {
    function RecipeService(_http) {
        this._http = _http;
        this._recipeUrl = 'Api/Recipes/recipes.json';
        this._menuUrl = 'Api/Recipes/menu.json';
    }
    RecipeService.prototype.getRecipes = function () {
        return this._http.get(this._recipeUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    RecipeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    RecipeService.prototype.getMenuList = function () {
        return this._http.get(this._menuUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    RecipeService.prototype.getFilteredMenuList = function (id) {
        return this.getMenuList()
            .map(function (listItems) { return listItems.filter(function (m) { return m.recipeNumber === id; }); });
    };
    RecipeService.prototype.getMenuDesc = function (menuId) {
        return this.getMenuList()
            .map(function (listItems) { return listItems.filter(function (m) { return m.menuID == menuId; }); });
    };
    return RecipeService;
}());
RecipeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map