// --- DI-IMPORT SECARA SINKRON (LOAD PERTAMA KALI) ---
// Komponen ini KRITIS untuk layout awal.
// Ukurannya kecil dan harus langsung tampil untuk mencegah Layout Shift.
import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopProgressBar from "./components/TopProgressBar.jsx";

// --- KONTEN YANG DI-LOAD SECARA ASINKRON (LAZY) ---
// Komponen-komponen ini akan di-load sesuai kebutuhan dari dalam router.jsx
// Contoh: const Home = React.lazy(() => import('./pages/Home'));

function App() {
  const location = useLocation();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const hideNavbar = location.pathname.startsWith("/products/");

  return (
      <div>
        {/* Bagian ini adalah "App Shell" Anda. */}
        {/* Karena Navbar dan TopProgressBar di-import secara sinkron, */}
        {/* mereka akan tampil INSTAN saat aplikasi dimuat. */}
        <TopProgressBar isLoading={isPageLoading} />
        {!hideNavbar && <Navbar />}

        <main>
          {/* React Router akan me-render komponen halaman yang di-lazy load di sini. */}
          {/* Ini adalah strategi yang benar: kerangka instan, konten lazy. */}
          <Outlet />
        </main>
      </div>
  );
}

export default App;