import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import invariant from "tiny-invariant";

import { router } from "~/router";

import "~/index.css";

const reactRoot = document.getElementById("root");

invariant(reactRoot != null, "There's no root div!");

createRoot(reactRoot).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
