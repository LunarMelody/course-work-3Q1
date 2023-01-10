import { createBrowserRouter } from "react-router-dom";

import Index from "./routes";
import ErrorPage from "./routes/error-page";
import Recipes, { loader as recipesIndexLoader } from "./routes/recipes";
import { SavedRecipes } from "./routes/recipes/saved";
import Recipe, {
  ErrorBoundary as RecipeErrorBoundary,
  loader as recipeLoader,
} from "./routes/recipes/slug";
import Root, { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "recipes",
        children: [
          {
            index: true,
            element: <Recipes />,
            loader: recipesIndexLoader,
          },
          {
            path: "saved",
            element: <SavedRecipes />,
          },
          {
            path: ":slug",
            element: <Recipe />,
            loader: recipeLoader,
            errorElement: <RecipeErrorBoundary />,
          },
        ],
      },
    ],
  },
]);

export { router };
