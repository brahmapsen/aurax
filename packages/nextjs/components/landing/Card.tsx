import React from "react";
import Image from "next/image";
import { ChevronsDown, ChevronsUp, Gift, MessageCircle, Star } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type CardProps = {
  id: number;
  image: string;
  question: string;
  chance: number;
  volume: string;
  reward: number;
};

export const Card = ({ id, image, question, chance, volume, reward }: CardProps) => {
  return (
    <div className="flex-start flex h-auto min-w-20 flex-col justify-between gap-5 rounded bg-[#030a13a4] p-4">
      <div className="flex flex-row justify-between gap-2">
        <div className="flex w-5/6 flex-row gap-3">
          <img src={image} alt={question} className="h-12 w-12 rounded-md" />
          <div className="text-md line-clamp-2 text-wrap font-semibold text-white">{question}</div>
        </div>
        <div className="relative h-16 w-1/6">
          <CircularProgressbar
            value={chance}
            // text={`${chance}%`}
            circleRatio={0.5} // Limit to half a circle
            styles={buildStyles({
              rotation: 0.75, // Start the progress bar at the bottom
              strokeLinecap: "butt",
              trailColor: "#e5e7eb", // Light gray for the background
              pathColor: chance > 50 ? "#40d67c" : "#d65c40", // Change color dynamically
              textColor: "#ffffff", // Text color
            })}
          />
          <div className="absolute inset-0 bottom-0 flex flex-col items-center justify-center gap-0 text-sm font-semibold text-white">
            <span className="leading-none">{`${chance}%`}</span>
            <span className="text-xs text-gray-300">chance</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <button className="text-md flex w-1/2 items-center justify-center gap-3 rounded-lg bg-transparent py-2 font-semibold text-buyColor hover:bg-buy-color hover:text-white">
          Yes <ChevronsUp size={18} />
        </button>
        <button className="text-md flex w-1/2 items-center justify-center gap-3 rounded-lg bg-transparent py-2 font-semibold text-sellColor hover:bg-sell-color hover:text-white">
          No <ChevronsDown size={18} />
        </button>
      </div>
      <div className="flex flex-row items-center justify-between text-sm font-light text-gray-300">
        <span className="">{volume} Vol.</span>
        <div className="flex flex-row items-center gap-2">
          <button>
            <Gift size={18} />
          </button>
          <button>
            <span className="flex items-center">
              <MessageCircle size={18} />
              {reward}
            </span>
          </button>
          <button>
            <Star size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
