export type GenerationInfo = {
  id: string;
  label: string;
  region: string;
  pokemonCount: number;
  offset: number;
  accent: string;
  glow: string;
  years: string;
};

export const generations: GenerationInfo[] = [
  { id: "1", label: "1a Generacion", region: "Kanto", pokemonCount: 151, offset: 0, accent: "#ff595e", glow: "#ffca3a", years: "1996-1999" },
  { id: "2", label: "2a Generacion", region: "Johto", pokemonCount: 100, offset: 151, accent: "#1982c4", glow: "#8ac926", years: "1999-2002" },
  { id: "3", label: "3a Generacion", region: "Hoenn", pokemonCount: 135, offset: 251, accent: "#ff924c", glow: "#ffca3a", years: "2002-2006" },
  { id: "4", label: "4a Generacion", region: "Sinnoh", pokemonCount: 107, offset: 386, accent: "#6a4c93", glow: "#b5179e", years: "2006-2010" },
  { id: "5", label: "5a Generacion", region: "Teselia", pokemonCount: 156, offset: 493, accent: "#2d3142", glow: "#4f5d75", years: "2010-2013" },
  { id: "6", label: "6a Generacion", region: "Kalos", pokemonCount: 72, offset: 649, accent: "#ef476f", glow: "#ffd166", years: "2013-2016" },
  { id: "7", label: "7a Generacion", region: "Alola", pokemonCount: 88, offset: 721, accent: "#06d6a0", glow: "#118ab2", years: "2016-2019" },
  { id: "8", label: "8a Generacion", region: "Galar", pokemonCount: 96, offset: 809, accent: "#3a86ff", glow: "#8338ec", years: "2019-2022" },
  { id: "9", label: "9a Generacion", region: "Paldea", pokemonCount: 112, offset: 905, accent: "#fb5607", glow: "#ffbe0b", years: "2022-actualidad" }
];
