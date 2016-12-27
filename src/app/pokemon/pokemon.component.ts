import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

	/**
	* List of pokemons, initializated empty
	*/
	pokemonList: Object[] = [];
	/**
	* Title of component 
	*/
	title: string = "Pokémons!";

	constructor(
		private pokemonService: PokemonService,
		private router: Router, 
  		private route: ActivatedRoute,
	) { }

	/**
	* Run at the component initialization
	*/
	ngOnInit() {
		// Suscribe to pokemons list observable
		this.pokemonService.getPokemons().subscribe(response => {
			this.pokemonList = response; // Assign response
		});
	}

	/**
	* Get the url to load pokemon image
	* @param id: Id of pokemon
	* @return String with the format url
	*/
	getPokemonUrl(id:string): string{
		return this.pokemonService.getPokemonImg(id);
	}
}
