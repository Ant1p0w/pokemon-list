
export type Pokemon = {
  id: number;
  name: string;
}

type Props = {
  pokemon: Pokemon
}

export const PokemonListItem = ({pokemon}: Props) => {
  return (
      <div>{pokemon.name}</div>
  )
}