import type { Recipe } from "~/data/recipes";

import { atomWithStorage } from "jotai/utils";

export type MarkedRecipes = Array<Recipe["slug"]>;
export const markedRecipesSlugAtom = atomWithStorage<MarkedRecipes>("saved-recipes-v1", []);
