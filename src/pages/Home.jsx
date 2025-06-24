import React from "react";
import AnimatedPage from "../components/AnimatedPage"; // Impor wrapper

function Home() {
  return (
    <AnimatedPage>
      {" "}
      {/* Bungkus konten dengan AnimatedPage */}
      <div>
        <h1>Halaman Home</h1>
        <p>Selamat datang di halaman utama kami!</p>
        <p>Selamat datang di website kami! Halaman ini memiliki animasi.</p>
        {/*    buat button*/}
        <button>Klik Saya</button>
      </div>
    </AnimatedPage>
  );
}

export default Home;
