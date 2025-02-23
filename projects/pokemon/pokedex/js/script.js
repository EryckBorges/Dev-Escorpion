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

        // Atribui eventos aos botões
        prev.onclick = () => {
            this.showPokemon(this.atual - 1);
        };
        next.onclick = () => {
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
        for (let tipo of pokemon.tipo) {
            tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
        }
        desc += `<br/>${pokemon.descricao}`;

        // Exibe a Descrição do Pokémon
        this.dad.innerHTML = desc;

        // Exibe a Imagem do Pokémon
        this.imagem.innerHTML = img;

        // Exibe o Nome e o Número
        this.pokedad.innerHTML = nome;
        this.titulo.innerHTML = tit;

        const shiny = document.querySelector('.shiny');

        shiny.addEventListener('click', () => {
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgShiny}" alt="${pokemon.nome}"/>`;
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
