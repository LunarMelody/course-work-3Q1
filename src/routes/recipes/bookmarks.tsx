import { useAtom } from "jotai";
import { Link } from "react-router-dom";

import { markedRecipesSlugAtom } from "~/atoms/savedRecipes";
import { Container } from "~/components/Container";
import Main from "~/components/Main";
import { RecipeCard } from "~/components/RecipeCard";
import { RECIPES } from "~/data/recipes";

export const RecipesBookmarks = () => {
  const [markedRecipesSlugs] = useAtom(markedRecipesSlugAtom);

  const markedRecipes = RECIPES.filter((r) => markedRecipesSlugs.includes(r.slug));

  if (markedRecipes.length <= 0) {
    return (
      <Main>
        <Container minHeight="full" className="flex flex-col items-center justify-center">
          <h2 className="mb-2 text-2xl font-bold">Вы пока не отложили ни один рецепт!</h2>
          <p>
            Ознакомиться с доступными рецептами можно{" "}
            <Link to="/recipes" className="text-base-content underline underline-offset-2">
              на этой странице
            </Link>
            .
          </p>
        </Container>
      </Main>
    );
  }

  return (
    <Main>
      <Container className="flex flex-col">
        <h2 className="pb-1 text-2xl font-bold">Отложенные рецепты</h2>
        <p className="pb-6">Все рецепты, которые были отложены вами раннее, можно найти здесь!</p>
        <div className="flex flex-row flex-wrap gap-6">
          {markedRecipes.map((recipe, idx) => (
            <RecipeCard
              key={idx}
              title={recipe.title}
              thumbnail={recipe.thumbnailUrl}
              slug={recipe.slug}
            />
          ))}
        </div>
      </Container>
    </Main>
  );
};
