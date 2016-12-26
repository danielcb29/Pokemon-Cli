import { Routes } from '@angular/router';
import { PokemonComponent} from './pokemon/pokemon.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
	{path: '', component: PokemonComponent},
	{path: 'about-me', component: AboutMeComponent},
	{path: '404', component: NotFoundComponent},
	{path: '**', redirectTo: '404'},

];