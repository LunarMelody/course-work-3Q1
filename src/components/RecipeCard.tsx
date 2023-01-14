import type { VariantProps } from "class-variance-authority";
import type { FC } from "react";

import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

type RecipeCardVariantProps = VariantProps<typeof recipeCardVariants>;

const recipeCardVariants = cva(
  "daisy-card break-inside-avoid overflow-y-hidden bg-base-100 shadow-lg",
  {
    variants: {
      maxWidth: {
        normal: "max-w-[320px]",
        none: null,
      },
      width: {
        auto: "w-auto",
        fit: "w-fit",
        full: "w-full",
      },
      height: {
        auto: "h-auto",
        fit: "h-fit",
        full: "h-full",
      },
    },
    defaultVariants: {
      height: "fit",
      width: "full",
      maxWidth: "normal",
    },
  },
);

type RecipeCardProps = {
  slug?: string;
  thumbnail: string;
  title: string;
  description?: string;
  className?: string;
} & RecipeCardVariantProps;

export const RecipeCard: FC<RecipeCardProps> = ({
  title,
  description,
  thumbnail,
  slug,
  className,
  maxWidth,
  width,
  height,
}) => {
  const cls = recipeCardVariants({ maxWidth, width, height, className });

  return (
    <div className={cls}>
      <figure className="w-full">
        <img src={thumbnail} className="aspect-square w-full object-cover" />
      </figure>

      <div className="daisy-card-body space-y-4">
        <h2 className="daisy-card-title">{title}</h2>
        {description && <p>{description}</p>}
        {slug != null && (
          <div className="daisy-card-actions flex-1 justify-end">
            <Link
              to={`/recipes/${slug}`}
              role="button"
              className="daisy-btn-primary daisy-btn self-end"
              preventScrollReset={false}
            >
              Посмотреть
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
