import {Pokemon, PokemonListItem} from "./PokemonListItem";

type Props = {
  pokemons: Pokemon[]
}

export const PokemonList = ({pokemons}: Props) => {
  return (
    <div>{pokemons.map(pokemon => <PokemonListItem key={pokemon.id} pokemon={pokemon}/>)}</div>
  )
}