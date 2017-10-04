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
var router_1 = require("@angular/router");
var recipe_service_1 = require("./recipe.service");
var RecipeDetailsComponent = (function () {
    function RecipeDetailsComponent(route, router, _recipeService) {
        this.route = route;
        this.router = router;
        this._recipeService = _recipeService;
        this.imageWidth = 150;
        this.imageMargin = 2;
    }
    RecipeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.recipeID = +params['id'];
            var menuid = +params['menuId'];
            _this.getMenuDesc(menuid);
        });
    };
    RecipeDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RecipeDetailsComponent.prototype.getMenuDesc = function (menuID) {
        var _this = this;
        this._recipeService.getMenuDesc(menuID).subscribe(function (menu) { return _this.menu = menu; }, function (error) { return _this.errorMessage = error; });
    };
    RecipeDetailsComponent.prototype.onBack = function () {
        this.router.navigate(['/recipe', this.recipeID]);
    };
    return RecipeDetailsComponent;
}());
RecipeDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'App/Recipes/recipe-details.component.html',
        styleUrls: ['App/Recipes/recipe-details.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        recipe_service_1.RecipeService])
], RecipeDetailsComponent);
exports.RecipeDetailsComponent = RecipeDetailsComponent;
//# sourceMappingURL=recipe-details.component.js.map