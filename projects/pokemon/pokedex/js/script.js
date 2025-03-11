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
                for (let tipo of pokemon.tipoEua) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoEua}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            } else if (lang === "es") {
                for (let tipo of pokemon.tipoEsp) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoEsp}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            } else if (lang === "fr") {
                for (let tipo of pokemon.tipoFra) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoFra}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
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
        const normal = document.querySelector('.normal');
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

        normal.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big class="center over">${pokemon.nro} - ${pokemon.nome}`;
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.img}" alt="${pokemon.nome}"/>`;
            if (pokemon.som !== undefined && this.permitirSom) {
                if (this.som !== null && !this.som.paused) {
                    this.som.pause();
                }
                this.som = new Audio(pokemon.som);
                this.som.play().catch(err => console.warn("Erro ao tentar reproduzir áudio:", err));
            }
            this.imagem.innerHTML = img;
            this.pokedad.innerHTML = nome;
        });

        shiny.addEventListener('click', () => {
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big class="center over">${pokemon.nro} - ${pokemon.nome} <img class='iconName' src="./image/shiny.png" alt="Shiny"></big>`;
            shinyAudio();
            let img = `<img class="pok-img${pokemon.tamanho}" src="${pokemon.imgShiny}" alt="${pokemon.nome}"/>`;
            this.imagem.innerHTML = img;
            this.pokedad.innerHTML = nome;
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
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoAlolaEua) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoAlolaEua}`;
                this.dad.innerHTML = desc;
        
            }else if (lang === "ch") {
                
                for (let tipo of pokemon.tipoAlolaChn) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoAlolaChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                for (let tipo of pokemon.tipoAlolaEsp) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;

                desc += `<br/>${pokemon.descricaoAlolaEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoAlolaFra) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoAlolaFra}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoAlola) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoAlola}`;
                this.dad.innerHTML = desc;
            }
            let nomeAlola = `<big class="center over">${pokemon.nro} - ${pokemon.nomeAlola} <img class='iconName' src="./image/alola.png" alt="Alola"></big>`;
                this.pokedad.innerHTML = nomeAlola;
                let img = `<img class="pok-img${pokemon.tamanhoAlola}" src="${pokemon.imgAlola}" alt="${pokemon.nomeAlola}"/>`;
                this.imagem.innerHTML = img;
        });

        alolaShiny.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
               
                desc += `<br/>${pokemon.descricaoAlolaEua}`;
                this.dad.innerHTML = desc;
        
            }else if (lang === "ch") {
                
                
                desc += `<br/>${pokemon.descricaoAlolaChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                

                desc += `<br/>${pokemon.descricaoAlolaEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                
                desc += `<br/>${pokemon.descricaoAlolaFra}`;
                this.dad.innerHTML = desc;
            }else {
                
                desc += `<br/>${pokemon.descricaoAlola}`;
                this.dad.innerHTML = desc;
            }
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            shinyAudio();
            let nomeAlola = `<big class="center over">${pokemon.nro} - ${pokemon.nomeAlola} <img class='iconName' src="./image/alolaShiny.png" alt="Alola"></big>`;
            this.pokedad.innerHTML = nomeAlola;
                let img = `<img class="pok-img${pokemon.tamanhoAlola}" src="${pokemon.imgAlolaShiny}" alt="${pokemon.nomeAlola}"/>`;
                this.imagem.innerHTML = img;
        });

        galar.addEventListener('click', () => {
             desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoGalarEua) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalarEua}`;
                this.dad.innerHTML = desc;
        
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoGalarChn) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                
                desc += `<br/>${pokemon.descricaoGalarChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                
                for (let tipo of pokemon.tipoGalarEsp) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalarEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoGalarFra) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalarFra}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoGalar) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalar}`;
                this.dad.innerHTML = desc;
            }
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nomeGalar = `<big class="center over">${pokemon.nro} - ${pokemon.nomeGalar} <img class='iconName' src="./image/galar.png" alt="Galar"></big>`;
                this.pokedad.innerHTML = nomeGalar;
                let img = `<img class="pok-img${pokemon.tamanhoGalar}" src="${pokemon.imgGalar}" alt="${pokemon.nomeGalar}"/>`;
                this.imagem.innerHTML = img;
        });

        galarShiny.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoGalarEua) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalarEua}`;
                this.dad.innerHTML = desc;
        
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoGalarChn) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                
                desc += `<br/>${pokemon.descricaoGalarChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                
                for (let tipo of pokemon.tipoGalarEsp) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalarEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoGalarFra) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalarFra}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoGalar) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoGalar}`;
                this.dad.innerHTML = desc;
            }
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            shinyAudio();
            let nomeGalar = `<big class="center over">${pokemon.nro} - ${pokemon.nomeGalar} <img class='iconName' src="./image/galarShiny.png" alt="Galar"></big>`;
                this.pokedad.innerHTML = nomeGalar;
                let img = `<img class="pok-img${pokemon.tamanhoGalar}" src="${pokemon.imgGalarShiny}" alt="${pokemon.nomeGalar}"/>`;
                this.imagem.innerHTML = img;
        });

        gigantamax.addEventListener('click', () => { 
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
               
                desc += `<br/>${pokemon.descricaoGigantamaxEua}`;
                this.dad.innerHTML = desc;
        
            }else if (lang === "ch") {
                
                
                desc += `<br/>${pokemon.descricaoGigantamaxChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                

                desc += `<br/>${pokemon.descricaoGigantamaxEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                
                desc += `<br/>${pokemon.descricaoGigantamaxFra}`;
                this.dad.innerHTML = desc;
            }else {
                
                desc += `<br/>${pokemon.descricaoGigantamax}`;
                this.dad.innerHTML = desc;
            }
            this.nuvem.style.opacity = '1';
            this.nuvem.style.transition = '0.5s linear';
            let nomeGigantamax = `<big class="center over">${pokemon.nro} - ${pokemon.nomeGigantamax} <img class='iconName' src="./image/gigantama.png" alt="Gigantamax"></big>`;
            this.pokedad.innerHTML = nomeGigantamax;
            let img = `<img class="pok-img${pokemon.tamanhoGigantamax}" src="${pokemon.imgGigantamax}" alt="${pokemon.nomeGigantamax}"/>`;
            this.imagem.innerHTML = img;
        });

        gigantamaxShiny.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
               
                desc += `<br/>${pokemon.descricaoGigantamaxEua}`;
                this.dad.innerHTML = desc;
        
            }else if (lang === "ch") {
                
                
                desc += `<br/>${pokemon.descricaoGigantamaxChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                

                desc += `<br/>${pokemon.descricaoGigantamaxEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                
                desc += `<br/>${pokemon.descricaoGigantamaxFra}`;
                this.dad.innerHTML = desc;
            }else {
                
                desc += `<br/>${pokemon.descricaoGigantamax}`;
                this.dad.innerHTML = desc;
            }
            shinyAudio();
            this.nuvem.style.opacity = '1';
            this.nuvem.style.transition = '0.5s linear';
            let nomeGigantamax = `<big class="center over">${pokemon.nro} - ${pokemon.nomeGigantamax} <img class='iconName' src="./image/gigantamaxShiny.png" alt="Gigantamax"></big>`;
            this.pokedad.innerHTML = nomeGigantamax;
            let img = `<img class="pok-img${pokemon.tamanhoGigantamax}" src="${pokemon.imgGigantamaxShiny}" alt="${pokemon.nomeGigantamax}"/>`;
            this.imagem.innerHTML = img;
        });

        mega.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoMegaEua) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoMegaEua}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoMegaChn) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                for (let tipo of pokemon.tipoMegaEsp) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoMegaFra) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaFra}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoMega) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMega}`;
                this.dad.innerHTML = desc;
            }
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big class="center over">${pokemon.nro} - ${pokemon.nomeMega} <img class='iconName' src="./image/mega.png" alt="Mega Evolution"></big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanhoMega}" src="${pokemon.imgMega}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        megaShiny.addEventListener('click', () => {
            megaValue = false;
            megaValueShiny = true;
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoMegaEua) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoMegaEua}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoMegaChn) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaChn}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                for (let tipo of pokemon.tipoMegaEsp) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEsp}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoMegaFra) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaFra}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoMega) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMega}`;
                this.dad.innerHTML = desc;
            }
            if (pokemon.imgMegaShinyX) {
                typeMega.style.opacity = '1'
                typeMega.style.transition = '0.5s linear';
                let nome = `<big>${pokemon.nro} - ${pokemon.nome}</big>`;
                this.pokedad.innerHTML = nome;
                let img = `<img class="pok-img${pokemon.tamanhoMega}" src="${pokemon.imgShiny}" alt="${pokemon.nome}"/>`;
                this.imagem.innerHTML = img;
            }else {
                shinyAudio();
                let nomeMega = `<big class="center over">${pokemon.nro} - ${pokemon.nomeMega} <img class='iconName' src="./image/megaShiny.png" alt="Mega Evolution"></big>`
                this.pokedad.innerHTML = nomeMega;
                let img = `<img class="pok-img${pokemon.tamanhoMega}" src="${pokemon.imgMegaShiny}" alt="${pokemon.nomeMega}"/>`;
                this.imagem.innerHTML = img;
            }
        });

        megax.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoMegaEuaX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoMegaEuaX}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoMegaChnX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoMegaChnX}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }else if (lang === "es") {
                for (let tipo of pokemon.tipoMegaEspX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoMegaEspX}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoMegaFraX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoMegaFraX}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }else {
                for (let tipo of pokemon.tipoMegaX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                desc += `<br/>${pokemon.descricaoMegaX}`;
                this.dad.innerHTML = desc;
                this.titulo.innerHTML = tit;
            }
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big class="center over">${pokemon.nro} - ${pokemon.nomeMega} <img class='iconName' src="./image/x.png" alt="Mega Evolution"></big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanhoMega}" src="${pokemon.imgMegaX}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        megay.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoMegaEuaY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEuaY}`;
                this.dad.innerHTML = desc;
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoMegaChnY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaChnY}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                for (let tipo of pokemon.tipoMegaEspY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEspY}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoMegaFraY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaFraY}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoMegaY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaY}`;
                this.dad.innerHTML = desc;
            }
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big class="center over">${pokemon.nro} - ${pokemon.nomeMega} <img class='iconName' src="./image/y.png" alt="Mega Evolution"></big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanhoMega}" src="${pokemon.imgMegaY}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        megaxShiny.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoMegaEuaX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEuaX}`;
                this.dad.innerHTML = desc;
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoMegaChnX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaChnX}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                for (let tipo of pokemon.tipoMegaEspX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEspX}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoMegaFraX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaFraX}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoMegaX) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaX}`;
                this.dad.innerHTML = desc;
            }
            shinyAudio();
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big class="center over">${pokemon.nro} - ${pokemon.nomeMega} <img class='iconName' src="./image/xShiny.png" alt="Mega Evolution"></big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanhoMega}" src="${pokemon.imgMegaShinyX}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        megayShiny.addEventListener('click', () => {
            desc = '';
            tit = '';
            const lang = localStorage.getItem("lang");

            if (lang === "eu") {
                for (let tipo of pokemon.tipoMegaEuaY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEuaY}`;
                this.dad.innerHTML = desc;
            }else if (lang === "ch") {
                for (let tipo of pokemon.tipoMegaChnY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaChnY}`;
                this.dad.innerHTML = desc;
            }else if (lang === "es") {
                for (let tipo of pokemon.tipoMegaEspY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaEspY}`;
                this.dad.innerHTML = desc;
            }else if (lang === "fr") {
                for (let tipo of pokemon.tipoMegaFraY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaFraY}`;
                this.dad.innerHTML = desc;
            }else {
                for (let tipo of pokemon.tipoMegaY) {
                    tit += `<img class='icon' src="${tipos[tipo]}" alt="${tipo}"> ${tipo.toUpperCase()} `;
                }
                this.titulo.innerHTML = tit;
                desc += `<br/>${pokemon.descricaoMegaY}`;
                this.dad.innerHTML = desc;
            }
            shinyAudio();
            this.nuvem.style.opacity = '0';
            this.nuvem.style.transition = '0.5s linear';
            let nome = `<big class="center over">${pokemon.nro} - ${pokemon.nomeMega} <img class='iconName' src="./image/yShiny.png" alt="Mega Evolution"></big>`;
            this.pokedad.innerHTML = nome;
            let img = `<img class="pok-img${pokemon.tamanhoMega}" src="${pokemon.imgMegaShinyY}" alt="${pokemon.nomeMega}"/>`;
            this.imagem.innerHTML = img;
        });

        //Função de slide de projetos e serviços
const slider = document.querySelector(".versions");
let isDown = false;
let startX;
let scrollLeft;

// Eventos de mouse
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // Parar se o mouse não estiver pressionado
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Multiplica para ajustar a velocidade
  slider.scrollLeft = scrollLeft - walk;
});

// Eventos de toque
slider.addEventListener("touchstart", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("touchmove", (e) => {
  if (!isDown) return; // Parar se não houver toque ativo
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Multiplica para ajustar a velocidade
  slider.scrollLeft = scrollLeft - walk;
});
    },

    onSearch: function(event) {
        this.nuvem.style.opacity = '0';
        this.nuvem.style.transition = '0.5s linear';
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
