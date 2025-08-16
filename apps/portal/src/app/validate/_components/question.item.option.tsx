"use client";

import { QuestionOption } from "@ivalo/db";
import { CircleCheckBig, CircleQuestionMark } from "lucide-react";
import { useCallback } from "react";
import { useSnapshot } from "valtio";
import { categoryState } from "../../_store/category.state.js";

export function QuestionOptionItem({
  option,
  index,
}: {
  option: QuestionOption;
  index: number;
}) {
  const snap = useSnapshot(categoryState);
  const isSelected = snap.selectedOption?.id === option.id;

  const onSelectItem = useCallback(
    (option: QuestionOption) => {
      if (option.id === snap.selectedOption?.id) {
        categoryState.selectedOption = undefined;
      } else {
        categoryState.selectedOption = option;
      }
    },
    [snap.selectedOption]
  );

  return (
    <li
      className={`list-row ${isSelected ? "bg-green-300" : ""} ${
        isSelected ? "" : "hover:bg-green-100"
      }  cursor-pointer`}
      key={option.id}
      onClick={() => onSelectItem(option)}
    >
      <div className="text-3xl font-thin opacity-30 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="list-col-grow flex flex-col justify-center pl-3">
        <h4 className="text-lg font-medium text-gray-900 mb-2">
          {option.text}
        </h4>

        {/* {option.info && isSelected && (
          <div className="text-xs uppercase font-semibold opacity-50">
            {option.info}
          </div>
        )} */}
      </div>

      {isSelected ? (
        <CircleCheckBig size={32} className="text-black" />
      ) : (
        <CircleQuestionMark
          size={32}
          className={
            !!snap.selectedOption ? "text-slate-400/50" : "text-orange-500"
          }
        />
      )}
    </li>
  );
}
