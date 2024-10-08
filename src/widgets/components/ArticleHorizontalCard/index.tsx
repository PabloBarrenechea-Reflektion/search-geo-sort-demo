// This component was generated by @sitecore-search/cli on Thu Sep 26 2024 12:00:25 GMT+0200 (Central European Summer Time)

import type { ActionProp, ItemClickedAction } from '@sitecore-search/react';
import { ArticleCard } from '@sitecore-search/ui';
import {getDistance} from "@/utils";
import {MapPin, TrainTrack} from "lucide-react";

type ArticleCardItemCardProps = {
  className?: string;
  displayText?: boolean;
  article: any;
  onItemClick: ActionProp<ItemClickedAction>;
  index: number;
};
const DEFAULT_IMG_URL = 'https://placehold.co/500x300?text=No%20Image'; // TODO: Update with corresponding fallback image

const ArticleHorizontalItemCard = ({
  className = '',
  article,
  onItemClick,
  index,
  displayText = false,
}: ArticleCardItemCardProps) => {
  return (
    <ArticleCard.Root
      key={article.id}
      className={`group flex flex-row p-4 my-4 flex-nowrap max-h-52 w-full relative border border-gray-300 dark:border-gray-600 rounded-md hover:shadow-lg hover:scale-105 hover:transition-all hover:ease-linear	hover:duration-300 focus-within:scale-105 focus-within:transition-all focus-within:ease-linear focus-within:duration-300 focus-within:hover:shadow-lg ${className}`}
    >
      <div className="w-[25%] flex-none overflow-hidden bg-gray-200 ">
        <ArticleCard.Image
          src={article?.locationimage || DEFAULT_IMG_URL}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="pl-4 grow flex-col">
        <a
          className="focus:outline-indigo-500"
          href={article.url}
          onClick={(event) => {
            event.preventDefault();
            onItemClick({
              id: article.id,
              index,
              sourceId: article.source_id,
            });
          }}
        >
          <span aria-hidden="true" className="absolute inset-0"></span>
          <ArticleCard.Title className="text-base">{article.name || article.title}</ArticleCard.Title>
        </a>
        <ArticleCard.Subtitle className="mt-3 text-sm text-gray-500 flex"><TrainTrack /><span className="ml-1">{getDistance(article.locationgeo)}Km</span></ArticleCard.Subtitle>
        <ArticleCard.Subtitle className="mt-3 text-sm text-gray-500 flex"><MapPin /><span className="ml-1">{article.locationgeo}</span></ArticleCard.Subtitle>
        {article.description && displayText && <div className="line-clamp-3 mt-3 text-sm">{article.description}</div>}
      </div>
    </ArticleCard.Root>
  );
};
export default ArticleHorizontalItemCard;
