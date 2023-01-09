import type { FC } from "react";

import { Link } from "react-router-dom";

type RecipeCardProps = {
  slug: string;
  thumbnail: string;
  title: string;
  description?: string;
};

export const RecipeCard: FC<RecipeCardProps> = ({ title, description, thumbnail, slug }) => {
  return (
    <div className="daisy-card h-fit w-full max-w-[320px] bg-base-100 shadow-xl">
      <figure className="w-full">
        <img src={thumbnail} className="aspect-square w-full object-cover" />
      </figure>

      <div className="daisy-card-body space-y-4">
        <h2 className="daisy-card-title">{title}</h2>
        {description && <p>{description}</p>}
        <div className="daisy-card-actions justify-end">
          <Link to={`/recipes/${slug}`} role="button" className="daisy-btn-primary daisy-btn">
            Посмотреть
          </Link>
        </div>
      </div>
    </div>
  );
};
