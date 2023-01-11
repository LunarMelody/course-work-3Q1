import type { LoaderFunctionArgs } from "react-router-dom";

import { BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/20/solid";
import { useAtom } from "jotai";
import { useRouteError, useLoaderData } from "react-router-dom";
import { z } from "zod";

import { markedRecipesSlugAtom } from "~/atoms/savedRecipes";
import { Container } from "~/components/Container";
import Main from "~/components/Main";
import { RecipeCard } from "~/components/RecipeCard";
import { Button } from "~/components/ui/Button";
import { RECIPES } from "~/data/recipes";

export type Loader = Awaited<ReturnType<typeof loader>>;

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const slug = await z.string().parseAsync(params.slug);

  const url = new URL(request.url);
  const vkShareHref = `https://vk.com/share.php?url=${url}`;

  const recipe = RECIPES.find((r) => r.slug === slug);

  if (!recipe) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Recipe not found!",
    });
  }

  return { recipe, vkShareHref };
};

export default function Recipe() {
  const { recipe, vkShareHref } = useLoaderData() as Loader;

  const [markedRecipes, setMarkedRecipes] = useAtom(markedRecipesSlugAtom);

  const isBookmarked = markedRecipes.includes(recipe.slug);

  const markRecipe = () => {
    if (isBookmarked) {
      return;
    }

    setMarkedRecipes((current) => [...current, recipe.slug]);
  };

  const unmarkRecipe = () => {
    if (!isBookmarked) {
      return;
    }

    setMarkedRecipes((current) => current.filter((bm) => bm !== recipe.slug));
  };

  return (
    <Main minHeight="full" height="auto" className="flex flex-col justify-center">
      <Container
        minHeight="fit"
        className="relative flex flex-col gap-6 md:grid md:grid-cols-[auto_1fr]"
      >
        <div className="flex h-fit flex-col md:sticky md:top-[calc(var(--header-height)+1rem)]">
          <RecipeCard
            title={recipe.title}
            thumbnail={recipe.thumbnailUrl}
            className="mb-6 w-full max-w-none md:max-w-[320px]"
          />

          {!isBookmarked && (
            <Button onClick={markRecipe} className="mb-2 gap-2">
              <BookmarkIcon className="h-5 w-5" />
              <span>Отложить</span>
            </Button>
          )}

          {!!isBookmarked && (
            <Button onClick={unmarkRecipe} className="mb-2 gap-2">
              <BookmarkSlashIcon className="h-5 w-5" />
              <span>Убрать из отложенных</span>
            </Button>
          )}

          <Button stateColor="info" as="a" target="_blank" rel="noreferrer" href={vkShareHref}>
            Поделиться в VK
          </Button>
        </div>

        <div className="rounded-box flex flex-col gap-6 bg-base-100 p-8 shadow-lg">
          <h2 className="text-xl font-bold">Ингредиенты</h2>
          <div className="overflow-x-auto">
            <table className="daisy-table-zebra daisy-table daisy-table-compact w-full">
              <tbody>
                {recipe.ingredients.map(([name, amount], idx) => (
                  <tr key={idx} className="flex flex-row">
                    <td className="flex-1">{name}</td>
                    <td>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold">Способ приготовления</h2>
          <ul className="list-outside list-disc pl-5">
            {recipe.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Main>
  );
}

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  const maybeStatusText =
    error != null && typeof error === "object" && "statusText" in error
      ? `${error.statusText}`
      : null;

  const maybeMessage =
    error != null && typeof error === "object" && "message" in error ? `${error.message}` : null;

  const message =
    error != null &&
    typeof error === "object" &&
    "status" in error &&
    typeof error.status === "number" &&
    error.status === 404
      ? "К сожалению, рецепт не найден.\nПожалуйста, убедитесь в правильности указанной ссылки!"
      : maybeStatusText || maybeMessage;

  return (
    <Main className="flex flex-col">
      <Container
        minHeight="full"
        className="flex flex-1 flex-col items-center justify-center space-y-8"
      >
        <h1 className="text-4xl font-bold">Ошибка!</h1>
        <p className="whitespace-pre-line text-center">{message}</p>
      </Container>
    </Main>
  );
};
