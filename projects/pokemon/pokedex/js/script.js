const app = {
    atual: 0,
    permitirSom: false, // Som só toca após interação do usuário

    init: function() {
        

        // Obtém os elementos HTML
        this.titulo = document.querySelector(".tit");
        let prev = document.querySelector("#prev");
        this.dad = document.querySelector(".tela");
        this.pokedad = document.querySelector(".pokemon-dados");
        let next = document.querySelector("#next");
        this.imagem = document.querySelector(".pokemon-img");
        this.nuvem = document.querySelector('.nuvem');

        // Atribui eventos aos botões
        prev.onclick = () => {
            this.nuvem.style.opacity = '0';
                this.nuvem.style.transition = '0.5s linear';
            this.showPokemon(this.atual - 1);
        };
        next.onclick = () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            this.showPokemon(this.atual + 1);
        };

        this.som = null;

        // Ativar som após interação do usuário
        document.addEventListener("click", () => {
            app.permitirSom = true;
        }, { once: true });

        // Exibe o Pokémon atual
        this.showPokemon(this.atual);
    },

    showPokemon: function(atual) {
      
        if (atual < 0) atual = dados.length - 1;
        if (atual === dados.length) atual = 0;

        this.atual = atual;
        let pokemon = dados[atual];

        // Emite som apenas se o usuário já tiver interagido
        if (pokemon.som !== undefined && this.permitirSom) {
            if (this.som !== null && !this.som.paused) {
                this.som.pause();
            }
            this.som = new Audio(pokemon.som);
            this.som.play().catch(err => console.warn("Erro ao tentar reproduzir áudio:", err));
        }

        // Seleciona o Nome
        let nome = `<big>${pokemon.nro} - ${pokemon.nome}${pokemon.genero}</big>`;

        // Seleciona a Imagem
        let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.img}" alt="${pokemon.nome}"/>`;

        // Seleciona a Descrição
        let desc = "";
        let tit = " ";
        const langPage = () => {
            // Obtém a linguagem salva no localStorage
            const lang = localStorage.getItem("lang");
          
            if (lang === "eu") {
             
            } else if (lang === "es") {
              
            } else if (lang === "fr") {
             
            } else if (lang === "ch") {
                for (let tipo of pokemon.tipoChn) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoChn}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            } else {
                for (let tipo of pokemon.tipo) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricao}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }
          };
          
          // Executa ao carregar a página
          langPage();

        // Exibe a Imagem do Pokémon
        this.imagem.innerHTML = img;

        // Exibe o Nome e o Número
        this.pokedad.innerHTML = nome;

        const audio = new Audio();
        audio.src = './audio/shiny.mp3';

        const shiny = document.querySelector('.shiny');
        const alola = document.querySelector('.alola');
        const galar = document.querySelector('.galar');
        const mega = document.querySelector('.mega');
        const gigantamax = document.querySelector('.gigantamax');
        const alolaShiny = document.querySelector('.alolaShiny');
        const galarShiny = document.querySelector('.galarShiny');
        const gigantamaxShiny = document.querySelector('.gigantamaxShiny');
        const megaShiny = document.querySelector('.megaShiny');
        const shinyStar = document.querySelector('.shinyStar');
        const megax = document.querySelector('.x');
        const megay = document.querySelector('.y');
        const megaxShiny = document.querySelector('.xShiny');
        const megayShiny = document.querySelector('.yShiny');

        const shinyAudio = () => {
            audio.play();
            shinyStar.style.opacity = '1';
            shinyStar.style.transition = '0.5s linear';
            setTimeout(() => {
                shinyStar.style.opacity = '0';
                shinyStar.style.transition = '0.5s linear';
                audio.pause();
                audio.currentTime = 0;
            }, 1200);
        }

        shiny.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            shinyAudio();
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgShiny}" alt="${pokemon.nome}"/>`;
            this.imagem.innerHTML = img;
        });

        const verificaVersion = () => {
            if (pokemon.imgAlola) {
                alola.style.display = 'flex';
                alolaShiny.style.display = 'flex';
            }else {
                alola.style.display = 'none';
                alolaShiny.style.display = 'none';
            }
            if (pokemon.imgGalar) {
                galar.style.display = 'flex';
                galarShiny.style.display = 'flex';
            }else {
                galar.style.display = 'none';
                galarShiny.style.display = 'none';
            }
            if (pokemon.imgGigantamax) {
                gigantamax.style.display = 'flex';
                gigantamaxShiny.style.display = 'flex';
            }else {
                gigantamax.style.display = 'none';
                gigantamaxShiny.style.display = 'none';
            }
            if (pokemon.imgMega) {
                mega.style.display = 'flex';
                megaShiny.style.display = 'flex';
            }else {
                mega.style.display = 'none';
                megaShiny.style.display = 'none';
            }
            if (pokemon.imgMegaX) {
                megax.style.display = 'flex';
                megay.style.display = 'flex';
                megaxShiny.style.display = 'flex';
                megayShiny.style.display = 'flex';
            }else {
                megax.style.display = 'none';
                megay.style.display = 'none';
                megaxShiny.style.display = 'none';
                megayShiny.style.display = 'none';
            }
            
        }

        verificaVersion();

        alola.addEventListener('click', () => {
                let nomeAlola = `<big>${pokemon.nro} - ${pokemon.nomeAlola}${pokemon.generoAlola }</big>`;
                this.pokedad.innerHTML = nomeAlola;
                let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgAlola}" alt="${pokemon.nomeAlola}"/>`;
                this.imagem.innerHTML = img;
        });

        alolaShiny.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            shinyAudio();
                let nomeAlola = `<big>${pokemon.nro} - ${pokemon.nomeAlola}${pokemon.generoAlola }</big>`;
                this.pokedad.innerHTML = nomeAlola;
                let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgAlolaShiny}" alt="${pokemon.nomeAlola}"/>`;
                this.imagem.innerHTML = img;
        });

        galar.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
                let nomeGalar = `<big>${pokemon.nro} - ${pokemon.nomeGalar}${pokemon.generoGalar }</big>`;
                this.pokedad.innerHTML = nomeGalar;
                let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgGalar}" alt="${pokemon.nomeGalar}"/>`;
                this.imagem.innerHTML = img;
        });

        galarShiny.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            shinyAudio();
                let nomeGalar = `<big>${pokemon.nro} - ${pokemon.nomeGalar}${pokemon.generoGalar }</big>`;
                this.pokedad.innerHTML = nomeGalar;
                let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgGalarShiny}" alt="${pokemon.nomeGalar}"/>`;
                this.imagem.innerHTML = img;
        });

        gigantamax.addEventListener('click', () => { 
            this.nuvem.style.opacity = '1';
            this.nuvem.style.transition = '0.5s linear';
            let nomeGigantamax = `<big>${pokemon.nro} - ${pokemon.nomeGigantamax}</big>`;
            this.pokedad.innerHTML = nomeGigantamax;
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgGigantamax}" alt="${pokemon.nomeGigantamax}"/>`;
            this.imagem.innerHTML = img;
        });

        gigantamaxShiny.addEventListener('click', () => {
            shinyAudio();
            this.nuvem.style.opacity = '1';
            this.nuvem.style.transition = '0.5s linear';
            let nomeGigantamax = `<big>${pokemon.nro} - ${pokemon.nomeGigantamax}</big>`;
            this.pokedad.innerHTML = nomeGigantamax;
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgGigantamaxShiny}" alt="${pokemon.nomeGigantamax}"/>`;
            this.imagem.innerHTML = img;
        });

        mega.addEventListener('click', () => {

            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
                let nome = `<big>${pokemon.nro} - ${pokemon.nomeMega}</big>`;
                this.pokedad.innerHTML = nome;
                let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgMega}" alt="${pokemon.nomeMega}"/>`;
                this.imagem.innerHTML = img;
        });

        megaShiny.addEventListener('click', () => {
            megaValue = false;
            megaValueShiny = true;
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            if (pokemon.imgMegaShinyX) {
                typeMega.style.opacity = '1'
                typeMega.style.transition = '0.5s linear';
                let nome = `<big>${pokemon.nro} - ${pokemon.nome}</big>`;
                this.pokedad.innerHTML = nome;
                let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgShiny}" alt="${pokemon.nome}"/>`;
                this.imagem.innerHTML = img;
            }else {
                shinyAudio();
                let nomeMega = `<big>${pokemon.nro} - ${pokemon.nomeMega}</big>`;
                this.pokedad.innerHTML = nomeMega;
                let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgMegaShiny}" alt="${pokemon.nomeMega}"/>`;
                this.imagem.innerHTML = img;
            }
        });

        megax.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big>${pokemon.nro} - ${pokemon.nomeMega}</big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgMegaX}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        megay.addEventListener('click', () => {

            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big>${pokemon.nro} - ${pokemon.nomeMega}</big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgMegaY}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        megaxShiny.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big>${pokemon.nro} - ${pokemon.nomeMega}</big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgMegaShinyX}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        megayShiny.addEventListener('click', () => {

            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big>${pokemon.nro} - ${pokemon.nomeMega}</big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgMegaShinyY}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        
    },

    onSearch: function(event) {
        let pokeFind = event.target.value;
        if (Number.isNaN(parseInt(pokeFind)) && pokeFind.length > 3) {
            for (let i = 0; i < dados.length; i++) {
                let p = dados[i];
                if (p.nome.toLowerCase().includes(pokeFind.toLowerCase())) {
                    this.showPokemon(i);
                    break;
                }
            }
        } else if (!Number.isNaN(parseInt(pokeFind))) {
            for (let i = 0; i < dados.length; i++) {
                let p = dados[i];
                if (p.nro === parseInt(pokeFind)) {
                    this.showPokemon(i);
                    break;
                }
            }
        }
    }
};

window.onload = function() {
    app.init();
};
