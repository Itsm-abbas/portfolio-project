import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Gojek() {
  const tasks = [
    {
      text: "Drove the product roadmap for In-App Chat Feature by conducting usability testing research and comparing with benchmarks.",
      keywords: ["Chat Feature", "testing research"],
    },
    {
      text: "Analyzed GoFood’s product retention and customer churn to provide a base for head-level decision making.",
      keywords: ["customer churn", "decision making"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-800 sm:text-lg text-sm font-Arimo tracking-wide">
            Business Operations Intern
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            March 2017 – June 2017
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
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
