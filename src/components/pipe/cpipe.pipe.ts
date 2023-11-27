import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe',
})
export class CpipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(value,args,'pipe')

    for (let i = 0; i < args.length; i++) {
      return  value + 12;
      
    }
    
  }

}
