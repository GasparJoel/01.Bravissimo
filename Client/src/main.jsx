import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento raíz para montar la aplicación.");
}
