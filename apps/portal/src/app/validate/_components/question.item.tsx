"use client";

import { QuestionWithOptions } from "@ivalo/db";
import { QuestionOptionItem } from "./question.item.option.jsx";
import { toDotNotation } from "../../_store/category.utils.js";

export function QuestionItem({
  question,
}: {
  question?: QuestionWithOptions | undefined;
}) {
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="rounded-lg bg-slate-400/[0.10] p-7 m-3 mb-0 flex items-start gap-2">
          <div className="flex gap-2 w-full">
            <div className="badge badge-primary text-xl font-display mt-1.5 mr-2">
              {toDotNotation(question?.code)}
            </div>

            <div className="flex flex-col w-full">
              <h3 className="text-lg font-medium text-gray-900 w-[85%]">
                {question?.text}
              </h3>
              {question?.info && (
                <div className="text-lg font-light text-gray-900">
                  {question?.info}
                </div>
              )}
            </div>
          </div>
        </li>

        <div className="p-3 py-5">
          {question?.options?.map((o, index: number) => (
            <QuestionOptionItem key={o.id} option={o} index={index} />
          ))}

          {question?.options?.length === 0 && (
            <textarea
              className="textarea textarea-lg flex flex-1 rounded-lg p-3 w-full h-20"
              placeholder="Enter your answer here..."
            ></textarea>
          )}
        </div>
      </ul>
    </div>
  );
}
