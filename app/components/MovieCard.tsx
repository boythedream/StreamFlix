"use client";
// MovieCard.jsx
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlayVideoModel from "./PlayVideoModel";
import { useState } from "react";
import { addToWatchList, removeFromWatchList } from "../action";
import { usePathname } from "next/navigation";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchLists: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

const MovieCard = ({
  title,
  overview,
  movieId,
  watchLists,
  watchListId,
  youtubeUrl,
  year,
  age,
  time,
}: iAppProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Play button - centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="transform transition-transform hover:scale-110"
        >
          <PlayCircle className="h-16 w-16 text-white opacity-80 hover:opacity-100" />
        </button>
      </div>

      {/* Heart button - top right */}
      <div className="absolute top-3 right-3 z-10">
        {watchLists ? (
          <form action={removeFromWatchList}>
            <input type="hidden" name="watchListId" value={watchListId} />
            <input type="hidden" name="pathname" value={pathname} />

            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-none hover:bg-black/50"
              type="submit"
            >
              <Heart className="h-5 w-5 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchList}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathname} />

            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-none hover:bg-black/50"
              type="submit"
            >
              <Heart className="h-5 w-5 text-white" />
            </Button>
          </form>
        )}
      </div>

      {/* Title - bottom left */}
      <div className="absolute bottom-3 left-3 right-3">
        <h1 className="text-xl font-bold line-clamp-1 text-white drop-shadow-md">
          {title}
        </h1>
        <div>
          <p className="text-sm text-white drop-shadow-md line-clamp-2">
            {year} | {age} | {time} min
          </p>
          <p className="text-sm text-white drop-shadow-md line-clamp-2">
            {overview}
          </p>
        </div>
      </div>
      <PlayVideoModel
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        state={open}
        changeState={setOpen}
        release={year}
        age={age}
        duration={time}
      />
    </div>
  );
};

export default MovieCard;
