const GENERATIONS = {all:'0',first:'151',second:'251',third:'386',fourth:'493',fifth:'649',sixth:'809',seventh:'890'}
const POKEMON_PER_GENERATIONS = ['151','100','135','107','156','160','81'];
const API = "https://pokeapi.co/api/v2/";
const URL_TYPE = `type/`;
const URL_POKEMON = `pokemon/`;
const URL_NATURE = `nature/`;
let generationPokemonSelect=null,typeOne=null,typeTwo=null;

let optionGenerationPokemon = document.getElementById('generation-pokemon');
let optionTypeOne = document.getElementById('type-one-pokemon');
let optionTypeOneSelect;
let optionTypeTwo = document.getElementById('type-two-pokemon');
let optionTypeTwoSelect;


async function pokeData (api) {
    // EXECUTE getdata y render data
    const response = await fetch(api)
    const data = (await response).json()
    return data
}

const generatorGalleryPokemonOpen = async () => {
    const urlAPI = `${API}${URL_POKEMON}?limit=20`
    const response = await pokeData(urlAPI)
}

function selectTypeTwoPokemon(){
    typeTwo = selectTypePokemon(optionTypeTwo)
}

function selectTypeOnePokemon(){
    typeOne = selectTypePokemon(optionTypeOne)
}

function selectTypePokemon(optionType){
    let selectedType = optionType.value;
    switch (selectedType){
        case 'null':
            return null

        case '1':
            return 1
        
        case '2':
            return 2
        
        case '3':
            return 3
        
        case '4':
            return 4
        
        case '5':
            return 5
        
        case '6':
            return 6
        
        case '7':
            return 7
        
        case '8':
            return 8
        
        case '9':
            return 9
        
        case '10':
            return 10
        
        case '11':
            return 11
        
        case '12':
            return 12
        
        case '13':
            return 13
        
        case '14':
            return 14
        
        case '15':
            return 15
        
        case '16':
            return 16
        
        case '17':
            return 17
        
        case '18':
            return 18
        
        case '10001':
            return 10001
        
        case '10002':
            return 10002
    }
}

function selectGenerationPokemon(){
    let selectedGeneration = optionGenerationPokemon.value;
    let lastGenerationPokemonActive = GENERATIONS.fifth;
    switch (selectedGeneration){
        case 'null':
            generationPokemonSelect = null
        break;
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
optionTypeTwo.addEventListener('change',selectTypeTwoPokemon);
generatorGalleryPokemonOpen()