import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState("");
  const params = useParams();

  /*useEffect para cargar los detalles de un proyecto específico basado 
en el parámetro de la URL. Y el método .filter para filtrar el proyecto
que coincida con los parámetros de la url*/
  useEffect(() => {
    let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
    setProyecto(proyecto[0]);
  }, []);

  return (
    <div className="page page-work">
      <div className="mask">
        <img src={"/images/" + proyecto.id + ".png"} />
      </div>

      <h1>Proyecto: {proyecto.nombre}</h1>
      <p>{proyecto.descripcion}</p>
      <a href={"https://" + proyecto.url} target="_blank">
        Ir al proyecto
      </a>
    </div>
  );
};
