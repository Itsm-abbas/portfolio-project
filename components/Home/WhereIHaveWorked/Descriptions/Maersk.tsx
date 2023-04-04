import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Maersk() {
  const tasks = [
    {
      text: "Worked on developing the front-end user dashboard of the blockchain supply chain platform.",
      keywords: ["blockchain"],
    },
    {
      text: "Propelled the release of TradeLens’ electronic Bill of Lading (eB/L) through pilot survey and usability testing methods.",
      keywords: ["TradeLens’ electronic"],
    },
    {
      text: "Ensured product development aligns with customer requirements and engineering capabilities.",
      keywords: ["customer requirements"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-800 dark:text-white sm:text-lg text-sm font-Arimo tracking-wide">
            Product Management Intern
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500 dark:text-gray-300">
            January 2019 – April 2019
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 dark:text-white sm:text-sm text-xs"
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
