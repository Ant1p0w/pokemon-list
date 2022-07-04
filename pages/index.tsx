import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import Head from 'next/head'
import {PokemonList} from "../components/PokemonList";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const GET_POKEMONS_LIST = gql`
  query pokemonsListQuery {
    pokemon_v2_item {
      id
      name
    }
  } 
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  });

  const response = await client.query({query: GET_POKEMONS_LIST});

  return {props: {pokemons: response.data.pokemon_v2_item}};
}

const Home: NextPage = ({ pokemons }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Pokemon List</title>
        <meta name="description" content="Список покемонов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonList pokemons={pokemons}/>
    </div>
  )
}

export default Home
