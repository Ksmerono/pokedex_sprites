# Pokedex Sprites con Astro

Aplicacion web estatica creada con Astro para explorar Pokemon por generaciones. La portada principal muestra las generaciones disponibles y cada una lleva a una pagina dedicada donde se cargan los Pokemon de esa region usando `PokeAPI`.

## Caracteristicas

- Portada principal centrada en generaciones Pokemon.
- Rutas estaticas por generacion en `/generaciones/[id]`.
- Carga de Pokemon desde `PokeAPI`.
- Tarjetas visuales con colores inspirados en los tipos de cada Pokemon.
- Popup con sprites:
  - frontal normal
  - trasero normal
  - frontal shiny
  - trasero shiny
- Estilo responsive para escritorio y movil.

## Tecnologias

- `Astro`
- `TypeScript`
- `CSS`
- `PokeAPI`

## Estructura del proyecto

```text
.
|- src/
|  |- data/
|  |  |- generations.ts
|  |- layouts/
|  |  |- BaseLayout.astro
|  |- pages/
|  |  |- index.astro
|  |  |- generaciones/
|  |     |- [generation].astro
|  |- styles/
|     |- global.css
|- astro.config.mjs
|- package.json
|- tsconfig.json
```

## Como funciona

### 1. Portada principal

La pagina de inicio esta en `src/pages/index.astro`. Desde ahi se renderizan las tarjetas de generaciones usando los datos definidos en `src/data/generations.ts`.

Cada tarjeta incluye:

- numero de generacion
- region
- cantidad de Pokemon
- rango de anos

### 2. Datos de generaciones

El archivo `src/data/generations.ts` centraliza la informacion de cada generacion:

- `id`
- `label`
- `region`
- `pokemonCount`
- `offset`
- `accent`
- `glow`
- `years`

Con `pokemonCount` y `offset` se construye la llamada correcta a `PokeAPI` para obtener solo los Pokemon de esa generacion.

### 3. Paginas por generacion

La ruta dinamica `src/pages/generaciones/[generation].astro` genera una pagina estatica para cada generacion mediante `getStaticPaths()`.

Astro construye automaticamente rutas como:

- `/generaciones/1`
- `/generaciones/2`
- `/generaciones/3`
- `/generaciones/4`
- `/generaciones/5`
- `/generaciones/6`
- `/generaciones/7`
- `/generaciones/8`
- `/generaciones/9`

### 4. Carga de Pokemon

En la pagina de generacion:

- primero se consulta `https://pokeapi.co/api/v2/pokemon?limit=...&offset=...`
- despues se piden los detalles individuales de cada Pokemon
- se ordenan por numero de Pokedex
- se generan las tarjetas en el cliente

Cada tarjeta muestra:

- numero de Pokedex
- sprite frontal
- nombre
- tipos

### 5. Popup de detalles

Al pulsar una tarjeta se abre un popup con:

- nombre del Pokemon
- numero de Pokedex
- tipos
- sprite frontal normal
- sprite trasero normal
- sprite frontal shiny
- sprite trasero shiny

## Instalacion

Necesitas tener `Node.js` y `npm` instalados.

```bash
npm install
```

## Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor local de Astro.

### Build de produccion

```bash
npm run build
```

Genera la version final estatica en la carpeta `dist/`.

### Vista previa del build

```bash
npm run preview
```

Sirve localmente la version ya compilada.

## Diseno

El proyecto usa una estetica inspirada en interfaces arcade y retro:

- tipografia pixel para titulos
- tipografia moderna para el contenido
- tarjetas con bordes marcados
- fondos con gradientes suaves
- animaciones cortas al mostrar las tarjetas

## Validacion realizada

El proyecto se comprobo con:

```bash
npm run build
```

El build genero correctamente la home y las 9 paginas de generaciones.

## Posibles mejoras

- agregar buscador por nombre dentro de cada generacion
- filtrar por tipo
- mostrar habilidades, stats y evoluciones
- cachear resultados para reducir peticiones
- internacionalizar nombres y tipos al espanol

## Creditos

- Datos y sprites base obtenidos desde `PokeAPI`
- Proyecto migrado a Astro para ofrecer una estructura mas clara, escalable y facil de mantener
