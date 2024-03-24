import React from "react";
import { trabajos } from "../data/trabajos.jsx";
import { Link } from "react-router-dom";

export const ListadoTrabajos = ({ limite }) => {
  return (
    <div className="page">
      <section className="work">
        {/* //Con el método .slice se recoge una porción de elementos en 
        el array, de la posición 0 al límite que le pasas en las props en
        el inicio, en este caso 2*/}
        {trabajos.slice(0, limite).map((trabajo) => (
          <article key={trabajo.id} className="work-item">
            <div className="mask">
              <img src={"/images/" + trabajo.id + ".png"} />
            </div>
            <h2>
              <Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
            </h2>
          </article>
        ))}
      </section>
    </div>
  );
};
