import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function POI() {
  const tasks = [
    {
      text: "Led several major projects that changed operations, including digitalizing traditional oil storage and distribution processes, integrating internet of things across key areas of operations, and implementing a data management system.",
      keywords: ["digitalizing", "internet of things", "data management"],
    },
    {
      text: "Established and implemented a digital system that managed the company’s operations and processes.",
      keywords: ["digital system"],
    }
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-800 sm:text-lg text-sm font-Arimo tracking-wide">
            Operations Manager
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2019 - December 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
