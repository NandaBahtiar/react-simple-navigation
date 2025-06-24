import React from "react";
import { Link, Outlet } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage.jsx";

function About() {
  return (
    <AnimatedPage>
      <div>
        <h1>Halaman About</h1>
        <p>Ini adalah halaman yang menjelaskan tentang kami.</p>
        <nav>
          <Link to="visi-misi" style={{ marginRight: "10px" }}>
            Visi Misi
          </Link>
          <Link to="our-team">Tim Kami</Link>
        </nav>
        <hr />
        {/* Konten dari nested route akan ditampilkan di sini */}
        <Outlet />
      </div>
    </AnimatedPage>
  );
}

export default About;
