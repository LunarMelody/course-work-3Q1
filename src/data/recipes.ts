export type RecipeMeta = {
  id: string;
  slug: string;
};

export type RecipeContent = {
  id: string;
  markdown: string;
};

export type Recipe = {
  slug: string;
  thumbnailUrl: string;
  title: string;
  description?: string;
  portions?: number;
  /** Array of tuples, 0 - ingredient, 1- quantity */
  ingredients: Array<[string, string | null]>;
  steps: Array<string>;
};

export const RECIPES: Recipe[] = [
  {
    slug: "meat-and-cheese-sandwich-roll",
    thumbnailUrl: `https://cdn.discordapp.com/attachments/1061282284134731786/1061282324756570193/byterbrod-rylet-s-myasom-i-sirom-50d78405f0b3d.jpg`,
    title: "Бутердрод-рулет с мясом и сыром",
    portions: 10,
    ingredients: [
      ["батон", "1 шт."],
      ["мясо копченое", "100 г."],
      ["колбаса полукопченая", "100 г."],
      ["сыр твердый", "100 г."],
      ["масло сливочное", "150 г."],
      ["перец сладкий зеленый", "2 шт."],
      ["помидоры", "2 шт."],
      ["яйца вареные", "3 шт."],
      ["горчица готовая", null],
      ["хрен тертый", null],
      ["соль", null],
    ],
    steps: [
      "У батона отрежьте концы, извлеките мякиш. Копчености, сыр, яйца, перец и помидоры мелко нарежьте.",
      "Масло разотрите с хреном и горчицей соедините с нарезанными продуктами, посолите. По желанию добавьте мякиш батона, нарезанный кубиками. Наполните батон полученной смесью и охладите, чтобы наполнитель затвердел.",
      "Перед подачей нарежьте ломтиками.",
    ],
  },
  {
    slug: "meat and cheese sandwich roll",
    thumbnailUrl: `https://cdn.discordapp.com/attachments/1061282284134731786/1061282324756570193/byterbrod-rylet-s-myasom-i-sirom-50d78405f0b3d.jpg`,
    title: "Бутердрод-рулет с мясом и сыром",
    portions: 10,
    ingredients: [
      ["батон", "1 шт."],
      ["мясо копченое", "100 г."],
      ["колбаса полукопченая", "100 г."],
      ["сыр твердый", "100 г."],
      ["масло сливочное", "150 г."],
      ["перец сладкий зеленый", "2 шт."],
      ["помидоры", "2 шт."],
      ["яйца вареные", "3 шт."],
      ["горчица готовая", null],
      ["хрен тертый", null],
      ["соль", null],
    ],
    steps: [
      "У батона отрежьте концы, извлеките мякиш. Копчености, сыр, яйца, перец и помидоры мелко нарежьте.",
      "Масло разотрите с хреном и горчицей соедините с нарезанными продуктами, посолите. По желанию добавьте мякиш батона, нарезанный кубиками. Наполните батон полученной смесью и охладите, чтобы наполнитель затвердел.",
      "Перед подачей нарежьте ломтиками.",
    ],
  },
];
