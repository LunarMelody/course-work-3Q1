import type { LoaderFunctionArgs } from "react-router-dom";

import { useRouteError, useLoaderData } from "react-router-dom";
import { z } from "zod";

import { Container } from "~/components/Container";
import Main from "~/components/Main";
import { RECIPES } from "~/data/recipes";

export type Loader = Awaited<ReturnType<typeof loader>>;

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = await z.string().parseAsync(params.slug);

  const recipe = RECIPES.find((r) => r.slug === slug);

  if (!recipe) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Recipe not found!",
    });
  }

  return { recipe };
};

export default function Recipe() {
  const { recipe } = useLoaderData() as Loader;

  return (
    <Main>
      <Container minHeight="full" className="">
        {recipe.title}
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
