// RecentlyAdd.tsx
import Image from "next/image";
import { prisma } from "../utlis/db";
import MovieCard from "./MovieCard";

// Define the Movie type based on the actual Prisma return type
type Movie = {
  id: number; // Changed from string to number
  title: string;
  overview: string;
  WatchLists: {
    id: string;
    userId: string;
    movieId: number | null;
  }[];
  imageString: string;
  youtubeString: string;
  age: number;
  release: number;
  duration: number;
};

async function getData(): Promise<Movie[]> {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      title: true,
      overview: true,
      WatchLists: true,
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}

const RecentlyAdd = async () => {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
      {data.map((movie: Movie) => (
        <div
          key={movie.id}
          className="relative h-60 overflow-hidden rounded-lg"
        >
          {/* Base image */}
          <Image
            width={500}
            height={400}
            src={movie.imageString}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/70 to-black h-full w-full rounded-lg relative">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover"
              />

              <MovieCard
                movieId={movie.id} // Now properly typed as number
                overview={movie.overview}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                youtubeUrl={movie.youtubeString}
                watchLists={movie.WatchLists.length > 0 ? true : false}
                key={movie.id}
                year={movie.release}
                age={movie.age}
                time={movie.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdd;
