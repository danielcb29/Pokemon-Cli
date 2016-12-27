import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {

	/**
	* Pokemon co enpoint to request pokemones
	**/
	baseUrl: string = "https://pokeapi.co/api/v2/pokemon/";


	/**
	* Url to request pokemon img
	**/
	imgUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

	constructor(private http: Http){}

	/**
	* Get 20 pokemons in array list from pokemon co API
	* @return observable with results
	**/
	getPokemons(): Observable<any>{
		return this.http.get(`${this.baseUrl}`).map(response => {
			return response.json().results; 
		})
	}

	/**
	* Get the url to load pokemon image
	* @param id: Id of pokemon
	* @return String with the format url
	*/
	getPokemonImg(id:string): string{
		return `${this.imgUrl}${id}.png`;
	}
}