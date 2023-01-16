const GENERATIONS = {all:'0',first:'151',second:'251',third:'386',fourth:'493',fifth:'649',sixth:'809',seventh:'890'}
const POKEMON_PER_GENERATIONS = ['151','100','135','107','156','160','81'];
const API = "https://pokeapi.co/api/v2/";
const URL_TYPE = `type/`;
const URL_POKEMON = `pokemon/`;
const URL_NATURE = `nature/`;
let generationPokemonSelect=null,typeOne=null,typeTwo=null;
let countRender = 3,initialGenerationSearch=0

let optionGenerationPokemon = document.getElementById('generation-pokemon');
let optionTypeOne = document.getElementById('type-one-pokemon');
let optionTypeOneSelect;
let optionTypeTwo = document.getElementById('type-two-pokemon');
let optionTypeTwoSelect;
let containerCards = document.getElementById('container-card')

const generatorType = async () => {
    const urlAPI = `${API}${URL_TYPE}?limit=${countRender}`
    const response = await pokeData(urlAPI)
}

function createCardPokemon (dataJson){    
    let viewCard = `
    <div class="card">
        <div class="card__up">
            <p class="card__up-view">VIEW</p>
            <P class="card__up-name">${dataJson.name.toUpperCase()}</P>
            <figure class="card__up-img">
                <img class="card__up-img--style" src="${dataJson.sprites.other.dream_world.front_default}" alt="pokemon ${dataJson.name}">
            </figure>
        </div>
        <div class="card__bottom">
            <p class="card__bottom-button">PLAY</p>
        </div>
    </div>
    `
    containerCards.innerHTML+=viewCard;
}

async function pokeData (api) {
    // EXECUTE getdata y render data
    const response = await fetch(api)
    const data = (await response).json()
    return data
}

const generatorPokemon = async () => {
    const urlAPI = `${API}${URL_POKEMON}?limit=${countRender}`
    const response = await pokeData(urlAPI)
    for (let index = initialGenerationSearch; index < countRender; index++) {
        let urlAPIPokemon = `${response.results[index].url}`;
        const dataPokemon = await pokeData(urlAPIPokemon);
        createCardPokemon(dataPokemon);
    }
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
            initialGenerationSearch = 0
        break;
        case 'all':
            generationPokemonSelect = lastGenerationPokemonActive
            initialGenerationSearch = 0
        break;
        case 'first':
            generationPokemonSelect = GENERATIONS.first
            initialGenerationSearch = 0
        break;
        case 'second':
            generationPokemonSelect = GENERATIONS.second
            initialGenerationSearch = parseInt(GENERATIONS.first) + 1
        break;
        case 'third':
            generationPokemonSelect = GENERATIONS.third
            initialGenerationSearch = parseInt(GENERATIONS.second) + 1
        break;
        case 'fourth':
            generationPokemonSelect = GENERATIONS.fourth
            initialGenerationSearch = parseInt(GENERATIONS.third) + 1
        break;
        case 'fifth':
            generationPokemonSelect = GENERATIONS.fifth
            initialGenerationSearch = parseInt(GENERATIONS.fourth) + 1
        break;
        default:
            generationPokemonSelect = GENERATIONS.all
            initialGenerationSearch = 0
        break;
    }
    countRender = parseInt(generationPokemonSelect)
    containerCards.innerHTML=''
    generatorPokemon()
}

optionGenerationPokemon.addEventListener('change',selectGenerationPokemon);
optionTypeOne.addEventListener('change',selectTypeOnePokemon);
optionTypeTwo.addEventListener('change',selectTypeTwoPokemon);
generatorPokemon()
generatorType()