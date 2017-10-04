import {PipeTransform, Pipe} from '@angular/core';
import { IMenu } from './menu';

@Pipe({
    name: 'recipeFilter'
})

export class RecipeFilterPipe implements PipeTransform {
    transform(value: IMenu[], filter: string) {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((menu: IMenu) => menu.menuName.toLocaleLowerCase().indexOf(filter) != -1) : value;
}
}