import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

	/**
	* Pipe to capitalize first leter of value
	* @param value: value to be capitalized
	* @return Value capitalized 
	*/
    transform(value:string): string {
        if (value != undefined) {
        	value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

}