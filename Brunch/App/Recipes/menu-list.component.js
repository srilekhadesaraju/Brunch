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
var recipe_filter_pipe_1 = require("./recipe-filter.pipe");
var MenuListComponent = (function () {
    function MenuListComponent(route, router, _recipeService) {
        this.route = route;
        this.router = router;
        this._recipeService = _recipeService;
        this.imageWidth = 150;
        this.imageHeight = 100;
        this.imageMargin = 2;
    }
    MenuListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getMenuList(id);
        });
    };
    MenuListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MenuListComponent.prototype.getMenuList = function (id) {
        var _this = this;
        this._recipeService.getFilteredMenuList(id).subscribe(function (menu) { return _this.menu = menu; }, function (error) { return _this.errorMessage = error; });
    };
    MenuListComponent.prototype.onBack = function () {
        this.router.navigate(['/recipes']);
    };
    return MenuListComponent;
}());
MenuListComponent = __decorate([
    core_1.Component({
        templateUrl: 'App/Recipes/menu-list.component.html',
        styleUrls: ['App/Recipes/menu-list.component.css'],
        pipes: [recipe_filter_pipe_1.RecipeFilterPipe]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        recipe_service_1.RecipeService])
], MenuListComponent);
exports.MenuListComponent = MenuListComponent;
//# sourceMappingURL=menu-list.component.js.map