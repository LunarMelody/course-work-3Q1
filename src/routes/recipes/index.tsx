import type { FormEvent, MouseEventHandler } from "react";
import type { LoaderFunctionArgs } from "react-router-dom";

import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import { Container } from "~/components/Container";
import Main from "~/components/Main";
import { RecipeCard } from "~/components/RecipeCard";
import { Button } from "~/components/ui/Button";
import { RECIPES } from "~/data/recipes";

export type Loader = Awaited<ReturnType<typeof loader>>;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  let recipes = RECIPES;

  if (query != null && typeof query === "string" && query.length > 1) {
    recipes = RECIPES.filter((r) => r.title.includes(query));
  }

  return { recipes, query };
};

export default function Recipes() {
  const { recipes, query } = useLoaderData() as Loader;

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchFormRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const onResetClick: MouseEventHandler = (e) => {
    e.preventDefault();

    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }

    navigate("?q=");
  };

  const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const q = formData.get("query");

    navigate(`?q=${q}`);
  };

  return (
    <Main display="flex" flexDir="col" className="gap-4">
      <Container>
        <form ref={searchFormRef} onSubmit={onSearchSubmit} className="daisy-input-group">
          <Button onClick={onResetClick}>
            <XMarkIcon type="button" className="h-5 w-5" />
          </Button>
          <input
            ref={searchInputRef}
            name="query"
            type="text"
            placeholder="Введите запрос"
            className="daisy-input-bordered daisy-input-primary daisy-input w-full"
            defaultValue={query ?? undefined}
            autoFocus
          />
          <Button>
            <CheckIcon type="submit" className="h-5 w-5" />
          </Button>
        </form>
      </Container>
      {recipes.length <= 0 && <Container className="flex items-center justify-center"></Container>}
      {recipes.length > 0 && (
        <Container className="flex flex-row flex-wrap justify-evenly gap-6">
          {recipes.map((recipe, idx) => (
            <RecipeCard
              key={idx}
              slug={recipe.slug}
              title={recipe.title}
              description={recipe.description}
              thumbnail={recipe.thumbnailUrl}
            />
          ))}
        </Container>
      )}
    </Main>
  );
}
