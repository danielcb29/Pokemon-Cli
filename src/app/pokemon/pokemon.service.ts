import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {

	/**
	* Pokemon co enpoint to request pokemones
	**/
	baseUrl: string = "http://pokeapi.co/api/v2/pokemon/";


	/**
	* Url to request pokemon img
	**/
	imgUrl: string = "http://pokeapi.co/media/sprites/pokemon/";

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
	* Get img url of pokemon id
	* @return string with img url
	**/
	getPokemonImg(id:string): string{
		return `${this.imgUrl}${id}.png`;
	}
}