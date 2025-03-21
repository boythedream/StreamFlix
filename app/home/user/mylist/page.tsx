import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utlis/auth";
import { prisma } from "@/app/utlis/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(email: string) {
  // First, get the user ID from the email
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    return [];
  }

  // Then use that ID to get the watchlist with all needed data
  const watchlistItems = await prisma.watchList.findMany({
    where: {
      userId: user.id,
    },
    include: {
      Movie: {
        select: {
          id: true,
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          youtubeString: true,
        },
      },
    },
  });

  // Return data in the format your component expects
  return watchlistItems;
}

export default async function Watchlist() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return (
      <div className="text-white text-center mt-10">
        Please log in to view your watchlist
      </div>
    );
  }

  const data = await getData(session.user.email);

  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watchlist
      </h1>

      {data.length === 0 ? (
        <div className="text-white text-center mt-10">
          Your watchlist is empty. Add some movies to see them here!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
          {data.map((item) => (
            <div key={item.Movie?.id} className="relative h-60">
              <Image
                src={item.Movie?.imageString as string}
                alt={item.Movie?.title || "Movie"}
                width={500}
                height={400}
                className="rounded-sm absolute w-full h-full object-cover"
              />
              <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                  <Image
                    src={item.Movie?.imageString as string}
                    alt={item.Movie?.title || "Movie"}
                    width={800}
                    height={800}
                    className="absolute w-full h-full -z-10 rounded-lg object-cover"
                  />

                  <MovieCard
                    age={item.Movie?.age as number}
                    movieId={item.Movie?.id as number}
                    overview={item.Movie?.overview as string}
                    time={item.Movie?.duration as number}
                    title={item.Movie?.title as string}
                    watchListId={item.id}
                    watchLists={true}
                    year={item.Movie?.release as number}
                    youtubeUrl={item.Movie?.youtubeString as string}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
