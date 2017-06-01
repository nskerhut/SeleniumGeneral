import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {

  transform(items: Employee[], filter: Employee): Employee[] { //Maybe this could be Employee[]?? Or any..
    if (!items || !filter){
      return items;
    }
      return items.filter((item: Employee) => this.applyFilter(item, filter));
    }
  
  applyFilter(employee: Employee, filter: Employee): boolean {
    for(let field in filter){
      if(filter[field]){
        if(typeof filter[field] === 'string'){
          if(employee[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        }else if (typeof filter[field] === 'number'){
          if(employee[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}

