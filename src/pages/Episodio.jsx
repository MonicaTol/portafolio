// https://rickandmortyapi.com/documentation/#location-schema

import React, { useEffect, useState } from "react";
export default function Episodio() {
  const [Episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json()) 
      .then((data) => {
        setEpisodes(data.results);
        console.log(data.results)
      })
      .catch((error) => {
        console.error("Error al cargar episodio:", error);
      });
  }, []);
  
  return (
    <div>
      {/* Título principal */}
      <h1>Episodios de Rick and Morty</h1>

      {/* Lista de episodios */}
      <ul>
        {Episodes.map((Episode) => (
          <li key={Episode.id}>
            <h2>{Episode.name}</h2>
            <p>Emitido: {Episode.air_date}</p>
            <p>Episodio: {Episode.episode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}