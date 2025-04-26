const pokemonList = document.getElementById('pokemonList');

        async function getPokemon() {
            try {
                const params = new URLSearchParams(window.location.search);
                const generation = params.get('generation') || '1';
                const generationEndpoints = {
                    '1': 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
                    '2': 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151',
                    '3': 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251',
                    '4': 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386',
                    '5': 'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493',
                    '6': 'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649',
                    '7': 'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721',
                    '8': 'https://pokeapi.co/api/v2/pokemon?limit=96&offset=809',
                    '9': 'https://pokeapi.co/api/v2/pokemon?limit=112&offset=905'
                };
                const apiUrl = generationEndpoints[generation];
                const response = await fetch(apiUrl);
                const data = await response.json();
                const pokemons = data.results;

                // Cambiar el título de la página según la generación
                document.getElementById('generationTitle').textContent = `Pokémon ${generation}ª Generación`;

                // Obtener todos los detalles primero
                const pokemonDetails = await Promise.all(
                    pokemons.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return await res.json();
                    })
                );

                // Ordenar los detalles por número de Pokédex
                pokemonDetails.sort((a, b) => a.id - b.id);

                // Crear las tarjetas en el orden correcto
                pokemonDetails.forEach((details) => {
                    const pokemonCard = document.createElement('div');
                    pokemonCard.classList.add('pokemon');

                    const typeNames = details.types.map(t => t.type.name);
                    const typeColors = {
                        fire: ['#F08030', '#F8D030'],
                        water: ['#6890F0', '#98D8D8'],
                        grass: ['#78C850', '#A8B820'],
                        electric: ['#F8D030', '#F5AC78'],
                        ice: ['#98D8D8', '#B8A038'],
                        fighting: ['#C03028', '#F85888'],
                        poison: ['#A040A0', '#705898'],
                        ground: ['#E0C068', '#A8A878'],
                        flying: ['#A890F0', '#7038F8'],
                        psychic: ['#F85888', '#EE99AC'],
                        bug: ['#A8B820', '#78C850'],
                        rock: ['#B8A038', '#C03028'],
                        ghost: ['#705898', '#705848'],
                        dark: ['#705848', '#A8A878'],
                        dragon: ['#7038F8', '#6890F0'],
                        steel: ['#B8B8D0', '#A8A878'],
                        fairy: ['#EE99AC', '#F8D030'],
                        normal: ['#A8A878', '#B8A038']
                    };
                    const color1 = typeColors[typeNames[0]][0];
                    const color2 = typeNames[1] ? typeColors[typeNames[1]][0] : typeColors[typeNames[0]][1];
                    pokemonCard.style.setProperty('--type-color1', color1);
                    pokemonCard.style.setProperty('--type-color2', color2);

                    pokemonCard.innerHTML = `
                        <img src="${details.sprites.front_default || 'https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg'}" alt="${details.name}">
                        <div class="pokemon-name">${details.name}</div>
                    `;

                    pokemonCard.addEventListener('click', () => showPopup(details));
                    pokemonList.appendChild(pokemonCard);
                });
            } catch (error) {
                console.error('Error cargando los Pokémon:', error);
                pokemonList.innerHTML = '<p>Error cargando los Pokémon 🥲</p>';
            }
        }

        const popup = document.getElementById('popup');
        const popupName = document.getElementById('popupName');
        const popupType = document.getElementById('popupType');
        const popupShiny = document.getElementById('popupShiny');
        const popupBack = document.getElementById('popupBack');
        const popupNormal = document.getElementById('popupNormal');
        const popupShinyBack = document.getElementById('popupShinyBack');
        const closePopup = document.getElementById('closePopup');

        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        function showPopup(details) {
            popupName.textContent = details.name;
            popupType.innerHTML = 'Tipo: ' + details.types.map(typeInfo => {
                const typeName = typeInfo.type.name;
                return `<span class="type-${typeName}">${typeName}</span>`;
            }).join(', ');
            popupNormal.src = details.sprites.front_default || 'https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg';
            popupBack.src = details.sprites.back_default || 'https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg';
            popupShiny.src = details.sprites.front_shiny || 'https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg';
            popupShinyBack.src = details.sprites.back_shiny || 'https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg';
            popup.style.display = 'flex';
        }

        getPokemon();