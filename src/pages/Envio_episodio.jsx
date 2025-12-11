import "../estilos/Envio.css"; 
import React, { useState } from "react";

export default function Envio_episodio() {{
  const [id, setId] = useState("");
  const [Episode, setEpisode] = useState(null);
  const [error, setError] = useState("");

  const fetchEpisode = async () => {
    setError("");
    const parsedId = Number(id);
    if (!parsedId || parsedId <= 0) {
      setError("Por favor ingresa un ID válido (número mayor a 0).");
      setEpisode(null);
      return;
    }

    try {
      const url = `https://rickandmortyapi.com/api/episode/${parsedId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`No se encontró el episodio con ID ${parsedId}.`);
      }

      const data = await response.json();
      setEpisode(data);
    } catch (err) {
      setError(err.message || "Ocurrió un error al cargar el episodio.");
      setEpisode(null);
    }
  };

  return (
    <div className="envio-container">

      <h1 className="envio-titulo">Buscar episodios por ID</h1>

      <p className="envio-descripcion">
        Ingresa un número de ID y presiona "Buscar" para obtener un episodio.
      </p>

      <div className="envio-input-group">
        <input
          type="number"
          placeholder="Ingresa un ID (ej: 1)"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="envio-input"
        />

        <button onClick={fetchEpisode} className="envio-btn">
          Buscar
        </button>
      </div>

      {error && (
        <p className="envio-error">{error}</p>
      )}

      {Episode && (
        <div className="envio-card">

          <h2>{Episode.name}</h2>

          <ul className="envio-lista">
            <li><strong>Episodio: </strong> {Episode.episode}</li>
            <li><strong>Fecha de emisión: </strong> {Episode.air_date}</li>
          </ul>

        </div>
      )}

    </div>
  );
}}
