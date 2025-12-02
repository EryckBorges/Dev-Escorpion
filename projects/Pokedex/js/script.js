const btnMorePokemons = document.querySelector('.buttonMore');
const linePokemon = document.querySelector('.linePokemon');

const geracoesLimit = [0, 151, 251, 386, 493, 649, 721, 809, 905];
const limit = 30;
let geracaoAtual = 0;
let offset = 0;

// Função para adicionar as tipagem de pokemon

let typesPokemons = (types) => {
    return types.map((typesForPokemons) => `<span>${typesForPokemons.type.name.charAt(0).toUpperCase() + typesForPokemons.type.name.slice(1)}</span>`)
}

// Função para adicionar o pokemon na tela

const constructorNewPokemon = (pokemon) => {
    btnMorePokemons.classList.add('rotateAnimation')
    const div = document.createElement('div');
    div.classList.add("center", "over", "cardPokemon", `${pokemon.types[0].type.name}`, `cardPokemon${pokemon.id}`, "animate__animated", "animate__zoomIn")

    div.innerHTML = `<div class="over center dados width">
                <span class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                <span class="id">#${pokemon.id}</span>
            </div>
            <div class="center over width contentPokemon">
                <div class="center over types height">
                    ${typesPokemons(pokemon.types).join('')}
                </div>
                <div class="center over pokemon heigth">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" draggable="false" alt="${pokemon.name}">
                </div>
            </div>`

    setTimeout(() => {
        btnMorePokemons.classList.remove('rotateAnimation')
    }, 4000);

    div.addEventListener('click', () => {
        const showPokemon = new ShowPokemonDetails(pokemon, pokemon.id);
        showPokemon.createPageDetails(pokemon);
    })

    return div

}

// Função para poder ter acesso os dados dos pokemons

const loadPokemon = (offset, limit, ordem = 'menorNumber') => {
    pokeApi.getPokemon(offset, limit).then((pokemonsList = []) => {
        // Ordenação por nome
        if (ordem === "a-z") {
            pokemonsList.sort((a, b) => a.name.localeCompare(b.name));
        } else if (ordem === "z-a") {
            pokemonsList.sort((a, b) => b.name.localeCompare(a.name));
        }
        // Ordenação por numero
        if (ordem == 'maiorNumber') {
            pokemonsList.reverse();
        }

        const list = document.querySelector('.linePokemon');
        pokemonsList.forEach((pokemon) => {
            const card = constructorNewPokemon(pokemon);
            list.appendChild(card)
        })
        btnMorePokemons.classList.remove('rotateAnimation');
    }).catch((error) => console.error(error));
}

// Verifica qual a geração que está selecionada para poder exibir a imagem

const verificaGeracao = (geracaoAtual) => {
    offset = geracoesLimit[geracaoAtual];
    loadPokemon(offset, limit)
}

// Ao clicar no botão a pagina adiciona mais pokemons

btnMorePokemons.addEventListener('click', () => {
    offset += limit;
    btnMorePokemons.classList.add('rotateAnimation');

    const qnt = offset + limit

    if (qnt >= geracoesLimit[geracaoAtual + 1]) {
        const newLimit = geracoesLimit[geracaoAtual + 1] - offset;
        loadPokemon(offset, newLimit)
        btnMorePokemons.setAttribute('disabled', '');
    } else {
        loadPokemon(offset, limit)
    }
});

// Seleção de Região

const filterRegiao = document.querySelector('#filter');
const organizar = document.querySelector("#organizar");

filterRegiao.addEventListener('change', () => {
    let valueRegiao = Number(filterRegiao.value)
    organizar.value = 0;
    switch (valueRegiao) {
        case 0:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 0;
            verificaGeracao(geracaoAtual);
            break;
        case 1:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 1;
            verificaGeracao(geracaoAtual);
            break;
        case 2:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 2;
            verificaGeracao(geracaoAtual);
            break;
        case 3:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 3;
            verificaGeracao(geracaoAtual);
            break;
        case 4:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 4;
            verificaGeracao(geracaoAtual);
            break;
        case 5:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 5;
            verificaGeracao(geracaoAtual);
            break;
        case 6:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 6;
            verificaGeracao(geracaoAtual);
            break;
        case 7:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 7;
            verificaGeracao(geracaoAtual);
            break;
        case 8:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 8;
            verificaGeracao(geracaoAtual);
            break;
        default:
            break;
    }
});

organizar.addEventListener('change', () => {
    let valueOrganizar = Number(organizar.value)
    switch (valueOrganizar) {
        case 0:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(offset, limit, 'menorNumber')
            break;
        case 1:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(geracoesLimit[geracaoAtual + 1] - limit, limit, 'maiorNumber')
            break;
        case 2:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(offset, limit, 'a-z')
            break;
        case 3:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(offset, limit, 'z-a')
            break;
        default:
            break;
    }
});

// Filtro através de pesquisa por nome ou id de pokemon

const searchPokemonInput = document.querySelector('.inputSearch');
const searchPokemonButton = document.querySelector('.btnSearch');

const filterSearch = (searchPokemon) => {
    linePokemon.innerHTML = ''
    console.log(searchPokemon);

    // Verifica se tem algo na pesquisa

    if (!searchPokemon) {
        verificaGeracao(geracaoAtual);
        return;
    }

    // Url para pegar todos os pokemons que existem e muito mais

    const urlAllPokemons = 'https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=3000';

    fetch(urlAllPokemons)
        .then((results) => results.json())
        .then((jsonDetailsAllPokemon) => {
            const allPokemons = jsonDetailsAllPokemon;

            const verificarSearch = async () => {
                if (!isNaN(searchPokemon)) {
                    const listAllPokemons = allPokemons.results[searchPokemon - 1];
                    console.log(listAllPokemons);

                    const listAllPokemonsUrl = `https://pokeapi.co/api/v2/pokemon-species/${listAllPokemons.name}/`

                    fetch(listAllPokemonsUrl)
                        .then((resultsUrl) => resultsUrl.json())
                        .then((jsonResultsUrl) => {
                            const urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${jsonResultsUrl.id}`
                            fetch(urlIdPokemon)
                                .then((resultsIdPokemonUrl) => resultsIdPokemonUrl.json())
                                .then((dadoPokemonUrlId) => {
                                    const cardSearchPokemon = constructorNewPokemon(dadoPokemonUrlId);
                                    linePokemon.appendChild(cardSearchPokemon)
                                })

                        })
                } else {
                    const listAllPokemons = allPokemons.results
                        .map(poke => poke.name)
                        .filter(poke => poke.startsWith(`${searchPokemon}`))
                        .sort((a, b) => a.localeCompare(b));

                    if (listAllPokemons.length == 0) {
                        const notFound = document.querySelector('.notFound');
                        notFound.classList.add('open');
                        btnMorePokemons.style.display = 'none';
                        setTimeout(() => {
                            searchPokemonInput.value = '';
                            notFound.classList.remove('open');
                            verificaGeracao(geracaoAtual);
                            btnMorePokemons.style.display = 'flex';
                        }, 2000);
                    }

                    for (const nome of listAllPokemons) {
                        const listAllPokemonsUrl = `https://pokeapi.co/api/v2/pokemon-species/${nome}/`;
                        const resultsUrl = await fetch(listAllPokemonsUrl).then(r => r.json());

                        const urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${resultsUrl.id}`;
                        const dadoPokemonUrlId = await fetch(urlIdPokemon).then(r => r.json());

                        const cardSearchPokemon = constructorNewPokemon(dadoPokemonUrlId);
                        linePokemon.appendChild(cardSearchPokemon);
                    }
                }
            }

            verificarSearch();

        })
}

verificaGeracao(geracaoAtual);

// Pesquisa quando preciona o enter

searchPokemonInput.addEventListener('search', () => {
    filterSearch(searchPokemonInput.value.toLowerCase())
})

// Click do botão para pesquisar

searchPokemonButton.addEventListener('click', () => {
    filterSearch(searchPokemonInput.value.toLowerCase())
})

class ShowPokemonDetails {
    constructor(pokemon, id) {
        this.pokemon = pokemon;
        this.id = id;
    }

    addTypePokemon(types) {
        return types.map((typesForPokemons) => `
            <div class="center over column type">
                <img src="./element/types/${typesForPokemons.type.name}.ico" draggable="false" alt="Icone ${typesForPokemons.type.name}">
                <span>
                    ${typesForPokemons.type.name.charAt(0).toUpperCase() + typesForPokemons.type.name.slice(1)}
                </span>
            </div>
        `).join('')
    }

    addMovsPokemon(moves) {
        return moves.moves.map((movsForPokemons) => `
            <span>${movsForPokemons.move.name.charAt(0).toUpperCase() + movsForPokemons.move.name.slice(1)}</span>
        `).join('')
    }

    addDescription(description) {
        let i = 0;

        while (description.flavor_text_entries[i].language.name != "en") {
            i++
        }

        return description.flavor_text_entries[i].flavor_text
    }

    evolutionToPokemon(id) {
    let url = id;

    fetch(url)
        .then((result) => result.json())
        .then((jsonEvolve) => {
            let allFirstEvolution = jsonEvolve.chain.evolves_to;

            pokeApi.getIdPokemonEvolution(allFirstEvolution).then((pokemonsList) => {
                // gera todas as imagens
                let evolves = pokemonsList.map(pokeId => 
                    `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png" alt="evolution">`
                ).join('');

                const div = `
                    <div class="center over evolutions">
                        ${evolves}
                    </div>
                `;

                return div
            });
        });
    }


    createPageDetails() {
        const urlForPokemon = `https://pokeapi.co/api/v2/pokemon-species/${this.id}/`;

        fetch(urlForPokemon)
            .then((result) => result.json())
            .then((details) => {
                const urlForPokemonDetails = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;

                fetch(urlForPokemonDetails)
                    .then((results) => results.json())
                    .then((jsonDetails) => {
                        const criePokemon = jsonDetails.cries.latest;
                        const audio = new Audio(criePokemon);
                        audio.play()

                        const main = document.querySelector('main');
                        const header = document.querySelector('header');
                        const detailsPokemon = document.querySelector('.detailsPokemon');
                        const backgroundPokemon = document.querySelector('.backgroundPokemon');
                        const pokemonName = document.querySelector('.pokemonName');
                        const pokedexDados = document.querySelector('.pokedexDados span');
                        const pokemonImage = document.querySelector('.pokemonImage img');
                        const weight = document.querySelector('.weight span');
                        const typesDetails = document.querySelector('.typesDetails');
                        const heightPokemon = document.querySelector('.heightPokemon span');
                        const descPokemons = document.querySelector('.descPokemons p');
                        const movs = document.querySelector('.movs');
                        const body = document.querySelector('body');

                        body.style.overflow = "hidden";
                        detailsPokemon.classList.remove('animate__animated', 'animate__fadeOutRight');
                        main.classList.remove('animate__animated', 'animate__fadeInLeft');
                        header.classList.remove('animate__animated', 'animate__fadeInLeft');
                        main.classList.add('animate__animated', 'animate__fadeOutLeft');
                        header.classList.add('animate__animated', 'animate__fadeOutLeft');
                        detailsPokemon.classList.add('actived', 'animate__animated', 'animate__fadeInRight');
                    
                        backgroundPokemon.classList.add(jsonDetails.types[0].type.name);
                        pokemonName.innerHTML = details.name.charAt(0).toUpperCase() + details.name.slice(1);
                        pokedexDados.innerHTML = this.id;
                        pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${this.id}.gif`;     
                    
                        weight.innerHTML = jsonDetails.weight / 10 + "Kg";
                        typesDetails.innerHTML = this.addTypePokemon(jsonDetails.types);
                        heightPokemon.innerHTML = jsonDetails.height / 10 + "M";
                        descPokemons.innerHTML = this.addDescription(details);
                        movs.innerHTML = this.addMovsPokemon(jsonDetails);
                        
                        // Funcionalidade Para quando o usuário quiser voltar para a tela anterior
                        history.pushState(null, "", location.href);
                        window.addEventListener('popstate', () => {
                            history.pushState(null, "", location.href);
                            body.style.overflow = "scroll";
                            main.classList.remove('animate__animated', 'animate__fadeOutLeft');
                            header.classList.remove('animate__animated', 'animate__fadeOutLeft');
                            detailsPokemon.classList.remove('animate__animated', 'animate__fadeInRight');
                            detailsPokemon.classList.add('animate__animated', 'animate__fadeOutRight');
                            main.classList.add('animate__animated', 'animate__fadeInLeft');
                            header.classList.add('animate__animated', 'animate__fadeInLeft');
                            setTimeout(() => {
                                detailsPokemon.classList.remove('actived');
                            }, 1000);

                        });

                        // Funcionalidade para mostrar o próximo pokemon ou pokemon anterior
                        const nextBtnPokemon = document.querySelector('.nextPokemon');
                        const backBtnPokemon = document.querySelector('.backPokemon');

                        nextBtnPokemon.addEventListener('click', () => {
                            let nextId = this.id + 1
                            const newPokemon = new ShowPokemonDetails(this.pokemon, nextId)
                            newPokemon.createPageDetails();
                        })

                        backBtnPokemon.addEventListener('click', () => {
                            let backId = this.id - 1
                            const newPokemon = new ShowPokemonDetails(this.pokemon, backId)
                            newPokemon.createPageDetails();
                        })

                        // Função para mostrar as estatisticas di pokemon

                        const info = document.querySelector(".info");
                        const esta = document.querySelector(".esta");
                        const form = document.querySelector(".form");
                        const evol = document.querySelector(".evol");

                        const verificaActive = (indice) => {
                            if (indice == 'info') {
                                if (info.classList.contains('active')) {
                                    info.classList.add('active');
                                } else {
                                    esta.classList.remove('active');
                                    form.classList.remove('active');
                                    evol.classList.remove('active');
                                    info.classList.add('active');
                                }
                            } else if (indice == 'esta') {
                                if (esta.classList.contains('active')) {
                                    esta.classList.add('active');
                                } else {
                                    info.classList.remove('active');
                                    form.classList.remove('active');
                                    evol.classList.remove('active');
                                    esta.classList.add('active');
                                }
                            } if (indice == 'form') {
                                if (form.classList.contains('active')) {
                                    form.classList.add('active');
                                } else {
                                    esta.classList.remove('active');
                                    info.classList.remove('active');
                                    evol.classList.remove('active');
                                    form.classList.add('active');
                                }
                            } if (indice == 'evol') {
                                if (evol.classList.contains('active')) {
                                    evol.classList.add('active');
                                } else {
                                    esta.classList.remove('active');
                                    form.classList.remove('active');
                                    info.classList.remove('active');
                                    evol.classList.add('active');
                                }
                            }
                        }

                        info.addEventListener('click', () => {
                            verificaActive('info');
                        })

                        form.addEventListener('click', () => {
                            verificaActive('form');
                        })

                        evol.addEventListener('click', () => {
                            verificaActive('evol');
                            this.evolutionToPokemon(details.evolution_chain.url)
                        })

                        esta.addEventListener('click', () => {
                            verificaActive('esta');
                        })

                    })

            })
    }
}

// Setor responsavel pela abertura e fechamento do menu

const btnMenu = document.querySelector('.btnMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.remove('animate__slideOutLeft');
    menu.classList.add('activeMenu', 'animate__animated', 'animate__slideInLeft');
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('animate__slideInLeft');
    menu.classList.add('animate__slideOutLeft')
    setTimeout(() => {
        menu.classList.remove('activeMenu');
    }, 1000);
})
