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
let containerDetail = document.getElementById('container__detail')
let containerHeader = document.getElementById('container__header')

// Create Detail Stat Pokemon Send
function CreateDetailStatPokemon (statsPokemon){
    containerDetail.innerHTML = '';
    console.log(statsPokemon);
    let imgPokemon = `${statsPokemon.sprites.other.dream_world.front_default}`
    let namePokemon = `${(statsPokemon.name).toUpperCase()}`
    let typeOnePokemon = `${statsPokemon.types[0].type.name || null}`
    let typeTwoPokemon = `${statsPokemon?.types[1]?.type?.name || null}`
    let numberLifePokemon = `${statsPokemon.stats[0].base_stat}`
    let nameLifePokemon = `${statsPokemon.stats[0].stat.name}`

    let viewStat = `
    <div class="container__detail--img">
        <span class="container__detail--img-close">&times;</span>
        <figure class="container__detail--img-figure">
            <img src="${imgPokemon}">
        </figure>
    </div>
    
    <div class="container__detail--content">

        <div class="container__detail--content-name">
            <p>${namePokemon}</p>
            <!-- <p>NATURE</p> -->
            <div class="container__detail--content-name-type">  
                <div class="type"><img src="../../img/${typeOnePokemon}.png" alt="" srcset=""></div>
                <div class="type"><img src="../../img/${typeTwoPokemon}.png" alt="" srcset=""></div>
            </div>
        </div>

        <div class="container__detail--content-life">
            <p>LIFE</p>
            <div>
                <p class="container__detail--content-life-hp">${numberLifePokemon} ${nameLifePokemon}</p>
            </div>
        </div>

        <div class="container__detail--content-stat">

            <div class="container__detail--content-stat-one stat">
                <p>ATTACK</p>
                <div>
                    <p>${statsPokemon.stats[1].base_stat}</p>
                </div>
            </div>

            <div class="container__detail--content-stat-two stat">
                <p>DEFENSE</p>
                <div>
                    <p>${statsPokemon.stats[2].base_stat}</p>
                </div>
            </div>

            <div class="container__detail--content-stat-three stat">
                <p>SPECIAL ATTACK</p>
                <div>
                    <p>${statsPokemon.stats[3].base_stat}</p>
                </div>
            </div>

            <div class="container__detail--content-stat-four stat">
                <p>SPECIAL DEFENSE</p>
                <div>
                    <p>${statsPokemon.stats[4].base_stat}</p>
                </div>
            </div>
        </div>

        <!-- <div class="container__detail--content-ofensive">
            <div>
                <p>
                    Offensive
                </p>
            </div>
            <div>
                <div class="type"><img src="../../img/water.png" alt="" srcset=""></div>
                <div class="type"><img src="../../img/rock.png" alt="" srcset=""></div>
                <div class="type"><img src="../../img/normal.png" alt="" srcset=""></div>
            </div>
        </div> -->

        <!-- <div class="container__detail--content-defensive">
            <div>
                <p>Defensive</p>
            </div>
            <div>
                <div class="type"><img src="../../img/cristal.png" alt="" srcset=""></div>
                <div class="type"><img src="../../img/dark.png" alt="" srcset=""></div>
                <div class="type"><img src="../../img/dragon.png" alt="" srcset=""></div>
            </div>
        </div> -->
    </div>
    `
    containerDetail.innerHTML = viewStat
    changeButton('flex',true,containerDetail)
    changeButton('none',true,containerCards)
    changeButton('none',true,containerHeader) 
}
// Get Data Pokemon Search
const searchPokemon = async (pokemonName) => {
    const urlAPI = `${API}${URL_POKEMON}${pokemonName}`
    const response = await pokeData(urlAPI);
    return response
}
// Execute View Detail
const viewStat = async (pokemonName) =>{
    let statsPokemon = await searchPokemon(pokemonName)
    CreateDetailStatPokemon(statsPokemon)
}
// Active Or Desactive Buttons Filter / Display Change
function changeButton (toolChange,boolOtherOption = false,divSelect){
    if (boolOtherOption){
        divSelect.style.display = toolChange;
    }else{
        optionGenerationPokemon.disabled = toolChange
        optionTypeOne.disabled = toolChange
        optionTypeTwo.disabled = toolChange
    }
}
// Generate Pokemon Initial Web, Filter Generation, Filter Type One And Filter Type Two
const generatorPokemon = async () => {
    // Generation Select
    if(typeOne == null && typeTwo == null){
        changeButton(true)
        const urlAPI = `${API}${URL_POKEMON}?limit=${countRender}`
        const response = await pokeData(urlAPI)
        for (let index = initialGenerationSearch; index < countRender; index++) {
            let urlAPIPokemon = `${response.results[index].url}`;
            const dataPokemon = await pokeData(urlAPIPokemon);
            createCardPokemon(dataPokemon);
        }
        changeButton(false)
    }else{ // Different Generation Select
        containerCards.innerHTML='';
        const urlAPI = `${API}${URL_TYPE}?limit=${countRenderType}`
        const response = await pokeData(urlAPI)
        
        for (let index = 0; index < countRenderType; index++) {
            // Type One And Two Select
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
                // Type Onw Select
                if(typeOne!=null){
                    changeButton(true)
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
                    changeButton(false)
                }
                // Type Two Select
                if(typeTwo!=null){
                    changeButton(true)
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
                    changeButton(false)
                }
            }
            
    
        }
    }
    
}
// Create Select Option From API
function createOptionTypePokemon (dataJson,optionType){   
    let viewTypePokemon = `
    <option value="${dataJson.name}">${dataJson.name}</option>
    `
    optionType.innerHTML+=viewTypePokemon;
}
// Get Select Option From API
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
// Create Card Pokemon From API
function createCardPokemon (dataJson){    
    let viewCard = `
    <div class="card" onclick="viewStat('${dataJson.name}')">
        <div class="card__up">
            <p class="card__up-view">VIEW</p>
            <P class="card__up-name">${dataJson.name.toUpperCase()}</P>
            <figure class="card__up-img">
                <img class="card__up-img--style" src="${dataJson.sprites.other.dream_world.front_default}" alt="pokemon ${dataJson.name}">
            </figure>
        </div>
        <div class="card__bottom" >
            <p class="card__bottom-button">VIEW</p>
        </div>
    </div>
    `
    containerCards.innerHTML+=viewCard;
}
// Get Data Pokemon From API
async function pokeData (api) {
    // EXECUTE getdata y render data
    const response = await fetch(api)
    const data = (await response).json()
    return data
}
// Filter Type Two
function selectTypeTwoPokemon(){
    typeTwo = selectTypePokemon(optionTypeTwo)
    generatorPokemon()
}
// Filter Type One
function selectTypeOnePokemon(){
    typeOne = selectTypePokemon(optionTypeOne)
    generatorPokemon()
}
// Get Type Filter
function selectTypePokemon(optionType){
    if(optionType.value == 'null'){
        return null
    }else{
        return optionType.value;
    }
}
// Get Filter Generation
function selectGenerationPokemon(){
    let selectedGeneration = optionGenerationPokemon.value;
    let lastGenerationPokemonActive = GENERATIONS.fifth;
    switch (selectedGeneration){
        case 'null':
            generationPokemonSelect = 8
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
// Add Event Change Generation
optionGenerationPokemon.addEventListener('change',selectGenerationPokemon);
// Add Event Change Type One
optionTypeOne.addEventListener('change',selectTypeOnePokemon);
// Add Event Change Type One
optionTypeTwo.addEventListener('change',selectTypeTwoPokemon);
// Generate Pokemon Initial Web
generatorPokemon()
// Generate Type Of Pokemon Initial Web
generatorType()