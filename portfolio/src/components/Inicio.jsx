import React from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./LiastadoTrabajos";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        "Soy <span className="name">Rebeca Pérez</span>,{" "}
        <strong>Desarrollador Web Junior</strong> con las tecnologías HTML5,
        CSS, JavaScript, React y MERN."
      </h1>
      <h2>
        Realizé bootcamp en la plataforma PixelPro y reforcé el aprendizaje en
        pildorasinformáticas.com y Udemy: Víctor Robles.
      </h2>
      <p className="title">
        <Link to={"/contacto"}>Contacta conmigo</Link>{" "}
      </p>

      <section className="last-works">
        <h3>Algunos de mis proyectos</h3>
        <p>Proyectos realizados a lo largo de mi aprendizaje</p>
        <ListadoTrabajos limite="2" />
      </section>
    </div>
  );
};
