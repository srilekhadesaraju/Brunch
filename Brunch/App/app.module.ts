import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { RecipeModule } from './Recipes/recipe.module';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing'

@NgModule({
    imports: [RecipeModule, BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]

})
export class AppModule { }
