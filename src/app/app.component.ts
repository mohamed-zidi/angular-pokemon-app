import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
  
})
export class AppComponent implements OnInit {

  pokemonsList:Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  errorMessage:string | undefined;

  ngOnInit():void{


  }

  selectPokemon(pokemonId:string) {
    
    const index:Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId);
    
    console.log(index);
    
    if(index){
      
      this.pokemonSelected = index;
      this.errorMessage = undefined;
    }else{
      
      this.pokemonSelected = index;
      this.errorMessage = "Choississez un nombre entre 1 et 12";
    }
  }
}
