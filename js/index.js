const GENERATIONS = {all:'0',first:'151',second:'251',third:'386',fourth:'493',fifth:'649',sixth:'809',seventh:'890'}
const POKEMON_PER_GENERATIONS = ['151','100','135','107','156','160','81'];
const API = "https://pokeapi.co/api/v2/";
const URL_TYPE = `type/`;
const URL_POKEMON = `pokemon/`;
const URL_NATURE = `nature/`;
let generationPokemonSelect=null,typeOne=null,typeTwo=null;
let countRender = 9,initialGenerationSearch=0,countRenderType

let optionGenerationPokemon = document.getElementById('generation-pokemon');
let optionTypeOne = document.getElementById('type-one-pokemon');
let optionTypeOneSelect;
let optionTypeTwo = document.getElementById('type-two-pokemon');
let optionTypeTwoSelect;
let containerCards = document.getElementById('container-card')

const generatorPokemon = async () => {
    
    if(typeOne == null && typeTwo == null){
        const urlAPI = `${API}${URL_POKEMON}?limit=${countRender}`
        const response = await pokeData(urlAPI)
        for (let index = initialGenerationSearch; index < countRender; index++) {
            let urlAPIPokemon = `${response.results[index].url}`;
            const dataPokemon = await pokeData(urlAPIPokemon);
            createCardPokemon(dataPokemon);
        }
    }else{
        containerCards.innerHTML='';
        const urlAPI = `${API}${URL_TYPE}?limit=${countRenderType}`
        const response = await pokeData(urlAPI)
        
        for (let index = 0; index < countRenderType; index++) {
            if (typeOne != null && typeTwo != null){
                if ((response.results[index].name == typeOne) || (response.results[index].name == typeTwo)){
                    let urlAPIPokemon = `${response.results[index].url}`;
                    const dataTypePokemon = await pokeData(urlAPIPokemon);
                    for (let indey = 0; indey < dataTypePokemon.pokemon.length; indey++) {
                        let urlAPIPokemonType = `${dataTypePokemon.pokemon[indey].pokemon.url}`;
                        const dataPokemon = await pokeData(urlAPIPokemonType);
                        if (dataPokemon.id > initialGenerationSearch && dataPokemon.id < countRender){
                            if((dataPokemon.types[0].type.name == typeOne)){
    
                                if((dataPokemon.types[1].type.name == typeTwo)){
                                    createCardPokemon(dataPokemon);
                                }
                            }
                            if((dataPokemon.types[1].type.name == typeOne)){
                                if((dataPokemon.types[0].type.name == typeTwo)){
                                    createCardPokemon(dataPokemon);
                                }
                            }
                        }
    
                    }
                return
                }
            }else{
                if(typeOne!=null){
                    if (response.results[index].name == typeOne){
                        let urlAPIPokemon = `${response.results[index].url}`;
                        const dataTypePokemon = await pokeData(urlAPIPokemon);
                        for (let indey = 0; indey < dataTypePokemon.pokemon.length; indey++) {
                            let urlAPIPokemonType = `${dataTypePokemon.pokemon[indey].pokemon.url}`;
                            const dataPokemon = await pokeData(urlAPIPokemonType);
                            if (dataPokemon.id > initialGenerationSearch && dataPokemon.id < countRender){
                                createCardPokemon(dataPokemon);
                            }
                        }
                    }
                }
                if(typeTwo!=null){
                    if (response.results[index].name == typeTwo){
                        let urlAPIPokemon = `${response.results[index].url}`;
                        const dataTypePokemon = await pokeData(urlAPIPokemon);
                        for (let indey = 0; indey < dataTypePokemon.pokemon.length; indey++) {
                            let urlAPIPokemonType = `${dataTypePokemon.pokemon[indey].pokemon.url}`;
                            const dataPokemon = await pokeData(urlAPIPokemonType);
                            if (dataPokemon.id > initialGenerationSearch && dataPokemon.id < countRender){
                                createCardPokemon(dataPokemon);
                            }
                        }
                    }
                }
            }
            
    
        }
    }
    
}

function createOptionTypePokemon (dataJson,optionType){   
    let viewTypePokemon = `
    <option value="${dataJson.name}">${dataJson.name}</option>
    `
    optionType.innerHTML+=viewTypePokemon;
}

const generatorType = async () => {
    countRender != 20 ? countRenderType = 20 : countRenderType = countRender
    const urlAPI = `${API}${URL_TYPE}?limit=${countRenderType}`
    const response = await pokeData(urlAPI)
    for (let index = 0; index < countRenderType; index++) {
        let urlAPIPokemon = `${response.results[index].url}`;
        const dataPokemon = await pokeData(urlAPIPokemon);
        createOptionTypePokemon(dataPokemon,optionTypeOne);
        createOptionTypePokemon(dataPokemon,optionTypeTwo);
    }
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

function selectTypeTwoPokemon(){
    typeTwo = selectTypePokemon(optionTypeTwo)
    generatorPokemon()
}

function selectTypeOnePokemon(){
    typeOne = selectTypePokemon(optionTypeOne)
    generatorPokemon()
}

function selectTypePokemon(optionType){
    return optionType.value;    
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
            initialGenerationSearch = parseInt(GENERATIONS.first)
        break;
        case 'third':
            generationPokemonSelect = GENERATIONS.third
            initialGenerationSearch = parseInt(GENERATIONS.second)
        break;
        case 'fourth':
            generationPokemonSelect = GENERATIONS.fourth
            initialGenerationSearch = parseInt(GENERATIONS.third)
        break;
        case 'fifth':
            generationPokemonSelect = GENERATIONS.fifth
            initialGenerationSearch = parseInt(GENERATIONS.fourth)
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