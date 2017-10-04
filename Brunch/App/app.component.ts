import { Component } from "@angular/core";


@Component({
    selector: "br-menu",
    template: `<div class='container-fluid'>
                            <div class='subMenu'>
                            <ul>
                            <li> <a [routerLink]="['home']"><img class="homeLogo" src="./Assets/home.jpg" />Home</a> </li>
                            <li> <a [routerLink]="['recipes']"><img class="homeLogo" src="./Assets/Logo.jpg"/>Collection</a> </li>
                            </ul>
                     </div>
                                           
                    <div class='container'>
                        <router-outlet></router-outlet>
                    </div>
                `,

    styleUrls: ['App/Home/homeStyle.css']
})

export class AppComponent {

}