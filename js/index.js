const GENERATIONS = {all:'0',first:'151',second:'251',third:'386',fourth:'493',fifth:'649',sixth:'809',seventh:'890'}
const POKEMON_PER_GENERATIONS = ['151','100','135','107','156','160','81'];
const API = "https://pokeapi.co/api/v2/";
const URL_TYPE = `type/`;
const URL_POKEMON = `pokemon/`;
const URL_NATURE = `nature/`;
let typeNumber,typeOne;

let optionGenerationPokemon = document.getElementById('generation-pokemon');
let generationPokemonSelect;
let optionTypeOne = document.getElementById('type-one-pokemon');
let optionTypeOneSelect;

function selectTypeOnePokemon(){
    typeOne = selectTypePokemon(optionTypeOne)
}

function selectTypePokemon(optionType){
    let selectedType = optionType.value;
    switch (selectedType){
        case '1':
            return typeNumber = 1
        
        case '2':
            return typeNumber = 2
        
        case '3':
            return typeNumber = 3
        
        case '4':
            return typeNumber = 4
        
        case '5':
            return typeNumber = 5
        
        case '6':
            return typeNumber = 6
        
        case '7':
            return typeNumber = 7
        
        case '8':
            return typeNumber = 8
        
        case '9':
            return typeNumber = 9
        
        case '10':
            return typeNumber = 10
        
        case '11':
            return typeNumber = 11
        
        case '12':
            return typeNumber = 12
        
        case '13':
            return typeNumber = 13
        
        case '14':
            return typeNumber = 14
        
        case '15':
            return typeNumber = 15
        
        case '16':
            return typeNumber = 16
        
        case '17':
            return typeNumber = 17
        
        case '18':
            return typeNumber = 18
        
        case '10001':
            return typeNumber = 10001
        
        case '10002':
            return typeNumber = 10002
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
optionTypeOne.addEventListener('change',selectTypeOnePokemon);