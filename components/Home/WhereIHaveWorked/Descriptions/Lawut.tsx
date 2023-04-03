import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Lawut() {
  const tasks = [
    {
      text: "Tasked to lead and drive client projects in the supply chain and maritime industry.",
      keywords: ["supply chain", "maritime"],
    },
    {
      text: "Developed a responsive monitoring system to track nationwide fishing conditions, shipping zones, and illegal activities.",
      keywords: ["responsive monitoring system"],
    },
    {
      text: "Established a ship-mapping library to access global real-time ship tracking and maritime analytics.",
      keywords: ["analytics"],
    },
    {
      text: "Currently building a blockchain-enabled tracking system for fish sourcing and provenance.",
      keywords: ["blockchain"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-800 sm:text-lg text-sm font-Arimo tracking-wide">
            Project Lead <span className="text-AAsecondary">@ Tech</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">July 2022 - Present</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
