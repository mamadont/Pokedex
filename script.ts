// Saving the div (pokemon card) in this variable
const container: HTMLElement | any = document.getElementById("app")

const pokemons: number = 100; 

// Defines the structure of the pokemon card 
interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

// Fetches data for specified number of pokemon in the pokemons variable 
const fetchData = (): void => {
    for (let i = 1; i <= pokemons; i++) {
      getPokemon(i)
    }
  }

// Fetch pokemon data for specified id 
const getPokemon = async (id: number): Promise<void> => {
    // Calls API
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    // Convert data to JSON 
    const pokemon: any = data.json()

    // Retrive the elemental type(s) of the pokemon
    const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ")

    const transformedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        type: pokemonType,
      }
    
    //showPokemon(transformedPokemon)

}
