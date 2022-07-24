import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform( string: string, enMayuscula: boolean = true ):string {
        return (enMayuscula) ? string.toUpperCase() : string.toLowerCase()
    } 
}