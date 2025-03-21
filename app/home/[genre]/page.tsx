import MovieCard from "@/app/components/MovieCard";
import { prisma } from "@/app/utlis/db";
import Image from "next/image";

async function getData(category: string, userId: string) {
  switch (category) {
    case "tvshows": {
      const data = await prisma.movie.findMany({
        where: {
          category: "show",
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    case "movies": {
      const data = await prisma.movie.findMany({
        where: {
          category: "movie",
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          WatchLists: {
            where: {
              userId: userId,
            },
            select: {
              userId: true,
            },
          },
        },
      });
      return data;
    }
    case "recently": {
      const data = await prisma.movie.findMany({
        where: {
          category: "recently",
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });

      return data;
    }

    default: {
      throw new Error("Invalid category");
    }
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre } = await params;

  const data = await getData(genre, "abc");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 sm:px-8">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-60">
          <Image
            priority
            width={500}
            height={400}
            src={movie.imageString}
            alt={movie.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <Image
              width={800}
              height={800}
              src={movie.imageString}
              alt="movie"
              className="w-full h-full rounded-lg object-cover"
            />
            <MovieCard
              key={movie.id}
              age={movie.age}
              time={movie.duration}
              watchListId={movie.WatchLists[0]?.userId}
              title={movie.title}
              overview={movie.overview}
              youtubeUrl={movie.youtubeString}
              watchLists={movie.WatchLists.length > 0 ? true : false}
              year={movie.release}
              movieId={0}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
