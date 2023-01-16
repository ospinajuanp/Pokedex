const GENERATIONS = {all:'0',first:'151',second:'251',third:'386',fourth:'493',fifth:'649',sixth:'809',seventh:'890'}
const POKEMON_PER_GENERATIONS = ['151','100','135','107','156','160','81'];
const API = "https://pokeapi.co/api/v2/";
const URL_TYPE = `type/`;
const URL_POKEMON = `pokemon/`;
const URL_NATURE = `nature/`;

let optionGenerationPokemon = document.getElementById('generation-pokemon');
let generationPokemonSelect;

function selectGenerationPokemon(){
    let selectedGeneration = optionGenerationPokemon.value;
    let lastGenerationPokemonActive = GENERATIONS.fifth;
    switch (selectedGeneration){
        case 'all':
            generationPokemonSelect = lastGenerationPokemonActive
        break;
        case 'first':
            generationPokemonSelect = GENERATIONS.first
        break;
        case 'second':
            generationPokemonSelect = GENERATIONS.second
        break;
        case 'third':
            generationPokemonSelect = GENERATIONS.third
        break;
        case 'fourth':
            generationPokemonSelect = GENERATIONS.fourth
        break;
        case 'fifth':
            generationPokemonSelect = GENERATIONS.fifth
        break;
        default:
            generationPokemonSelect = GENERATIONS.all
        break;
    }
}

optionGenerationPokemon.addEventListener('change',selectGenerationPokemon);