import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Clock, Calendar } from "lucide-react";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: (state: boolean) => void;
  release: number;
  age: number;
  duration: number;
}

const PlayVideoModal = ({
  title,
  overview,
  youtubeUrl,
  state,
  changeState,
  age,
  duration,
  release,
}: iAppProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-gradient-to-br from-black to-gray-900 text-white border border-gray-800 rounded-xl shadow-2xl">
        <div className="relative w-full">
          {/* Video Container */}
          <div className="relative pt-[56.25%] w-full">
            <iframe
              src={youtubeUrl}
              title={title}
              className="absolute top-0 left-0 w-full h-full shadow-inner"
              allowFullScreen
            ></iframe>
          </div>

          {/* Close button */}
          <DialogClose className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-200 backdrop-blur-sm z-10">
            <X size={20} className="text-white" />
          </DialogClose>
        </div>

        <DialogHeader className="p-6 space-y-4">
          <DialogTitle className="text-3xl font-extrabold text-white tracking-tight">
            {title}
          </DialogTitle>

          <div className="flex gap-x-4 items-center text-sm">
            <div className="flex items-center gap-1 text-amber-400">
              <Calendar size={16} />
              <span>{release}</span>
            </div>
            <div className="px-2 py-1 bg-red-500/20 border border-red-500 text-red-400 rounded-md font-semibold">
              {age}+
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <Clock size={16} />
              <span>{duration}h</span>
            </div>
          </div>

          <DialogDescription className="text-gray-300 leading-relaxed bg-black/30 p-4 rounded-lg backdrop-blur-sm max-h-32 overflow-y-auto text-sm">
            {overview}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;
