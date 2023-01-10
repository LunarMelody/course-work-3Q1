import type { FC } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

type RecipeCardProps = {
  slug?: string;
  thumbnail: string;
  title: string;
  description?: string;
  className?: string;
};

export const RecipeCard: FC<RecipeCardProps> = ({
  title,
  description,
  thumbnail,
  slug,
  className,
}) => {
  return (
    <div className={clsx("daisy-card h-fit w-full max-w-[320px] bg-base-100 shadow-lg", className)}>
      <figure className="w-full">
        <img src={thumbnail} className="aspect-square w-full object-cover" />
      </figure>

      <div className="daisy-card-body space-y-4">
        <h2 className="daisy-card-title">{title}</h2>
        {description && <p>{description}</p>}
        {slug != null && (
          <div className="daisy-card-actions justify-end">
            <Link to={`/recipes/${slug}`} role="button" className="daisy-btn-primary daisy-btn">
              Посмотреть
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
