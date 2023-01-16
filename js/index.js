const GENERATIONS = {all:'0',first:'151',second:'251',third:'386',fourth:'493',fifth:'649',sixth:'809',seventh:'890'}
const POKEMON_PER_GENERATIONS = ['151','100','135','107','156','160','81'];
const API = "https://pokeapi.co/api/v2/";
const URL_TYPE = `type/`;
const URL_POKEMON = `pokemon/`;
const URL_NATURE = `nature/`;
let typeNumber;

let optionGenerationPokemon = document.getElementById('generation-pokemon');
let generationPokemonSelect;

function selectTypePokemon(optionType){
    let selectedType = optionType.value;
    switch (selectedType){
        case '1':
            typeNumber = 1
        break;
        case '2':
            typeNumber = 2
        break;
        case '3':
            typeNumber = 3
        break;
        case '4':
            typeNumber = 4
        break;
        case '5':
            typeNumber = 5
        break;
        case '6':
            typeNumber = 6
        break;
        case '7':
            typeNumber = 7
        break;
        case '8':
            typeNumber = 8
        break;
        case '9':
            typeNumber = 9
        break;
        case '10':
            typeNumber = 10
        break;
        case '11':
            typeNumber = 11
        break;
        case '12':
            typeNumber = 12
        break;
        case '13':
            typeNumber = 13
        break;
        case '14':
            typeNumber = 14
        break;
        case '15':
            typeNumber = 15
        break;
        case '16':
            typeNumber = 16
        break;
        case '17':
            typeNumber = 17
        break;
        case '18':
            typeNumber = 18
        break;
        case '10001':
            typeNumber = 10001
        break;
        case '10002':
            typeNumber = 10002
        break;

    }
}

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