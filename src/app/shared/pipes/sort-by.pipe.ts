import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {

  transform(
    value: Observable<any[]>,
    sortBy: string,
    orderBy: 'asc' | 'desc' = 'asc'
  ): Observable<any[]> {
    return value.pipe(
      map((arr) => {
        if (!arr || !arr.length) return arr;

        //sort dates
        const isDate = sortBy === 'date' && typeof arr[0][sortBy] === 'string';
        if (isDate) {
          return arr.sort((a, b) => {
            const aDate = moment(a[sortBy]);
            const bDate = moment(b[sortBy]);
            return orderBy === 'desc' ? bDate.diff(aDate) : aDate.diff(bDate);
          });
        }

        //sort numbers
        const isNumber = typeof arr[0][sortBy] === 'number';
        if (isNumber) {
          return arr.sort((a, b) => {
            return orderBy === 'desc'
              ? b[sortBy] - a[sortBy]
              : a[sortBy] - b[sortBy];
          });
        }

        //sort strings
        const isString = typeof arr[0][sortBy] === 'string';
        if (isString) {
          return arr.sort((a, b) => {
            return orderBy === 'desc'
              ? b[sortBy].localeCompare(a[sortBy])
              : a[sortBy].localeCompare(b[sortBy]);
          });
        }

        return arr;
      })
    );
  }

}
