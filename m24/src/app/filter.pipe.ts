import { Pipe, PipeTransform } from '@angular/core';
import { MainService } from './main.service';
var productsArray;
@Pipe({
    name:'filter'
})

export class FilterPipe implements PipeTransform {
    constructor(private service:MainService) { }
    transform(items:any[], searchText: string): any[] {
        if (!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        items = items.filter(n => n.toString().toLowerCase().indexOf(searchText) !== -1);
        var cards = this.service.getData();
        productsArray = this.service.getData();
        cards = cards.filter(card => items.includes(card.title));
        var indexArray: number[] = [];
        cards.forEach(card => indexArray.push(productsArray.indexOf(card)));
        console.log(indexArray);
        return indexArray;
        };
    }
