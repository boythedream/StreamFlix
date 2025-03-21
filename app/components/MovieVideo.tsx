import { prisma } from "../utlis/db";
import MovieButtons from "./MovieButtons";

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      imageString: true,
      videoSource: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });
  return data;
}
const MovieVideo = async () => {
  const data = await getData();
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center  ">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        className="w-full absolute top-0 left-0 object-cover h-[60vh] -z-10 brightness-50"
        src={data?.videoSource}
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1
          className="
        text-white text-3xl md:text-5xl lg:text-6xl font-bold"
        >
          {data?.title}
        </h1>
        <p className="text-white text-sm mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-5 mt-5">
          <MovieButtons
            age={data?.age as number}
            overview={data?.overview as string}
            id={data?.id as number}
            title={data?.title as string}
            releaseDate={data?.release as number}
            duration={data?.duration as number}
            youtubeUrl={data?.videoSource as string}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;
