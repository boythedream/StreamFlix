"use client";
import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModel";

interface iAppProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}
const MovieButtons = ({
  overview,
  youtubeUrl,

  age,
  title,
  releaseDate,
  duration,
}: iAppProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between">
      <Button
        onClick={() => setOpen(true)}
        className="bg-gray-100 text-black hover:bg-gray-600  font-bold py-2 px-4 rounded"
      >
        <PlayCircle className="mr-2 h-4 w-4" />
        Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="ml-3 bg-gray-100 text-black hover:bg-gray-600  font-bold py-2 px-4 rounded"
      >
        <InfoIcon className="mr-2 h-4 w-4" />
        Learn More
      </Button>
      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        youtubeUrl={youtubeUrl}
        title={title}
        overview={overview}
        release={releaseDate}
        duration={duration}
      />
    </div>
  );
};

export default MovieButtons;
