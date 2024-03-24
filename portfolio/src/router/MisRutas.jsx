import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio.jsx";
import { Portfolio } from "../components/Portfolio.jsx";
import { Servicios } from "../components/Servicios.jsx";
import { Curriculum } from "../components/Curriculum.jsx";
import { Contacto } from "../components/Contacto.jsx";
import { HeaderNav } from "../components/layout/HeaderNav.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { Proyecto } from "../components/Proyecto.jsx";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      <HeaderNav />

      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to={"/Inicio"} />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyecto/:id" element={<Proyecto />} />
          <Route
            path="*"
            element={<h1 className="page">Página no encontrada</h1>}
          />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  );
};
