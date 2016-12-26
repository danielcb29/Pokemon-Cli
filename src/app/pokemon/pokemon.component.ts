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


	constructor(
		private pokemonService: PokemonService,
		private router: Router, 
  		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		/*this.pokemonService.getPokemons().subscribe(response => {
			this.pokemonList = response;
			console.log(this.pokemonList);
		});*/
	}

}
