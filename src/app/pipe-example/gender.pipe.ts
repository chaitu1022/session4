import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: 'GenderPipe'
})

export class GenderPipe implements PipeTransform {
    transform(value: any, gender: any) {
        return `${gender.toLowerCase() == "male" ? 'Mr.' : 'Mrs.'} ${value}`
    }

}