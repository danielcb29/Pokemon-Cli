import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

	pokemonList: Object[] = [];
	title: string = "Pokemons!";

	constructor(
		private pokemonService: PokemonService,
		private router: Router, 
  		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.pokemonService.getPokemons().subscribe(response => {
			this.pokemonList = response;
		});
	}

	getPokemonUrl(id:string){
		return this.pokemonService.getPokemonImg(id);
	}
}
