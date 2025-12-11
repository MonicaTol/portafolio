import "../estilos/envio.css"; 
// 1) Importamos React y useState para manejar estado local en el componente
import React, { useState } from "react";
export default function Envio() {

  /**
   * 2) Estado "id":
   * - Guarda lo que escribe el usuario en el input (el ID del personaje).
   * - Es un string inicialmente vacío para controlar el input.
   */
  const [id, setId] = useState("");

  /**
   * 3) Estado "character":
   * - Guarda el objeto del personaje que devuelve la API.
   * - Comienza en null, así podemos saber si todavía no hay datos cargados.
   */
  const [character, setCharacter] = useState(null);

  /**
   * 4) Estado "error":
   * - Guarda un mensaje de error si algo sale mal (ID inválido, red, etc.).
   * - Nos permite mostrar feedback claro en la interfaz.
   */
  const [error, setError] = useState("");

  /**
   * 5) Función "fetchCharacter":
   * - Se ejecuta cuando el usuario hace clic en "Buscar".
   * - Valida el ID, construye la URL, consume la API y guarda la respuesta en el estado.
   * - Maneja errores (HTTP y de red) para mejorar la experiencia.
   */
  const fetchCharacter = async () => {
    // 5.1) Limpiamos errores previos
    setError("");

    // 5.2) Validamos que haya un ID y que sea un número positivo
    const parsedId = Number(id);
    if (!parsedId || parsedId <= 0) {
      setError("Por favor ingresa un ID válido (número mayor a 0).");
      setCharacter(null);
      return;
    }

    try {
      // 5.3) Construimos la URL usando el ID ingresado
      const url = `https://rickandmortyapi.com/api/character/${parsedId}`;

      // 5.4) Hacemos la petición GET a la API
      const response = await fetch(url);

      // 5.5) Si la respuesta no es OK (404, 500, etc.), lanzamos un error controlado
      if (!response.ok) {
        throw new Error(`No se encontró el personaje con ID ${parsedId}.`);
      }

      // 5.6) Convertimos la respuesta a JSON
      const data = await response.json();

      /**
       * 5.7) Guardamos los datos del personaje en el estado "character":
       * - data es un objeto con propiedades como id, name, status, species, image, gender, etc.
       * - Al actualizar el estado, React re-renderiza el componente y muestra la información.
       */
      setCharacter(data);
    } catch (err) {
      // 5.8) Si ocurre cualquier error, lo mostramos y limpiamos el personaje previo
      setError(err.message || "Ocurrió un error al cargar el personaje.");
      setCharacter(null);
    }
  };

  /**
   * 6) Render:
   * - Mostramos un input controlado para el ID, un botón para buscar y el resultado.
   * - Condicionalmente renderizamos mensajes de error y la tarjeta del personaje.
   */
  return (
    <div className="envio-container">

      {/* 6.1) Título y breve descripción */}
      <h1>Buscar personaje por ID</h1>
      <p>Ingresa un número de ID y presiona "Buscar" para obtener un personaje.</p>

      {/* 6.2) Input controlado */}
      <div className="envio-input-group">
        <input
          type="number"
          placeholder="Ingresa un ID (ej: 1)"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="envio-input"
        />

        {/* 6.3) Botón que dispara la búsqueda */}
        <button onClick={fetchCharacter} className="envio-btn">
          Buscar
        </button>
      </div>

      {/* 6.4) Mensaje de error */}
      {error && (
        <p className="envio-error">
          {error}
        </p>
      )}

      {/* 6.5) Renderizado del personaje */}
      {character && (
        <div className="envio-card">

          {/* 6.6) Información del personaje */}
          <h2>{character.name}</h2>
          <img
            src={character.image}
            alt={character.name}
            className="envio-img"
          />

          <ul className="envio-details">
            <li><strong>Estado:</strong> {character.status}</li>
            <li><strong>Especie:</strong> {character.species}</li>
            <li><strong>Género:</strong> {character.gender}</li>
            <li><strong>Origen:</strong> {character.origin?.name}</li>
            <li><strong>Ubicación:</strong> {character.location?.name}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
