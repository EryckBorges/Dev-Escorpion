const app = {
    atual: 0,
    init: function() {
        //Obtem os elementos html
        this.titulo = document.querySelector(".tit");
        let prev = document.querySelector("#prev");
        this.dad = document.querySelector(".tela");
        this.pokedad = document.querySelector(".pokemon-dados");
        let next = document.querySelector("#next");
        this.imagem = document.querySelector(".pokemon-img");
        //Atribui eventos aos botões
        prev.onclick = ( ) => {
            this.showPokemon(this.atual-1);
        };
        next.onclick = ( ) => {
            this.showPokemon(this.atual+1);
        };

        this.som = null;
        //Exibe o pokemon atual
        this.showPokemon(this.atual);
    },

    showPokemon:function(atual){
        if(atual < 0) atual = dados.length - 1;
        if(atual === dados.length) atual = 0;

        this.atual = atual;
        let pokemon = dados[atual];
        //Emite som
        if(pokemon.som !== undefined) {
            if(this.som !== null) {
                this.som.pause();
            }
            this.som = new Audio(pokemon.som);
            this.som.play();
        };
        //Seleciona o Nome
        let nome = `<big>${pokemon.nro} - ${pokemon.nome}${pokemon.genero}<big>`;
        //Seleciona a Imagem
        let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.img}"/>`;
        //Seleciona a Descrição
        let desc = "";
        let tit = " ";
        for(let tipo of pokemon.tipo) tit += `<img class='icon' src="${tipos[tipo]}">${tipo.toUpperCase()} `;
        desc += `<br/>${pokemon.descricao}`;
        //Exibe a Descrição do Pokémon
        this.dad.innerHTML = desc;
        //Exibe a Imagem do Pokémon
        this.imagem.innerHTML = img;
        //Exibe o Nome e o Número
        this.pokedad.innerHTML = nome;
        this.titulo.innerHTML = tit;
    },

    onSearch: function(event){
        let pokeFind = event.target.value;
        if(Number.isNaN(parseInt(pokeFind)) && pokeFind.length > 3){
            for(let i=0; i<dados.length; i++){
                let p = dados[i];
                if(p.nome.toLowerCase().includes(pokeFind.toLowerCase())){
                    this.showPokemon(i);
                    i = dados.length;
                }
            }
        } else if(!Number.isNaN(parseInt(pokeFind))){
            for(let i=0; i<dados.length; i++){
                let p = dados[i];
                if(p.nro === parseInt(pokeFind)){
                    this.showPokemon(i);
                    i = dados.length;
                }
            }
        }

    }
};
window.onload = function(){
    app.init();
};