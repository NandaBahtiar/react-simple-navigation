import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Impor komponen layout utama dan komponen pelindung
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingSpinner from "./components/LoadingSpinner"; // Asumsi Anda punya komponen ini

// Lazy load semua komponen halaman, sama seperti sebelumnya
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Product = React.lazy(() => import("./pages/Product"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const VisiMisi = React.lazy(() => import("./pages/VisiMisi"));
const OurTeam = React.lazy(() => import("./pages/OurTeam"));

// Membuat router menggunakan konfigurasi berbasis objek
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App.jsx menjadi komponen layout induk
    // errorElement menangani semua error, termasuk 404. Ini lebih baik dari path="*"
    errorElement: (
      <Suspense fallback={<LoadingSpinner />}>
        <NotFound />
      </Suspense>
    ),
    children: [
      // Konversi dari: <Route path="/" element={<Home />} />
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      // Konversi dari: <Route path="/about" element={<About />}>...</Route>
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
        children: [
          // Konversi dari: <Route path="visi-misi" element={<VisiMisi />} />
          {
            path: "visi-misi",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <VisiMisi />
              </Suspense>
            ),
          },
          // Konversi dari: <Route path="our-team" element={<OurTeam />} />
          {
            path: "our-team",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <OurTeam />
              </Suspense>
            ),
          },
        ],
      },
      // Konversi dari: <Route path="/contact" element={<Contact />} />
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
      // Konversi dari: <Route path="/login" element={<Login />} />
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        ),
      },
      // Konversi dari: <Route path="/dashboard" element={<ProtectedRoute>...</ProtectedRoute>} />
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      // Konversi dari: <Route path="/product" element={<Product />} />
      {
        path: "product",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Product />
          </Suspense>
        ),
      },
      // Konversi dari: <Route path="/products/:productId" element={<ProductDetail />} />
      {
        path: "products/:productId",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDetail />
          </Suspense>
        ),
      },
    ],
  },
]);
