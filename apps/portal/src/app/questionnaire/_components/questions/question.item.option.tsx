"use client";

import { QuestionOption } from "@ivalo/db";
import cx from "classnames";
import { CircleCheckBig, CircleQuestionMark, Info } from "lucide-react";
import { useCallback } from "react";
import { useSnapshot } from "valtio";
import { categoryState } from "../../../_store/category.state.js";

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

  const classNames = cx({
    "list-row": true,
    "bg-green-300": isSelected,
    "border border-green-500": isSelected,
    "hover:bg-green-100": !isSelected,
    "cursor-pointer": true,
  });

  return (
    <li
      key={option.id}
      onClick={() => onSelectItem(option)}
      className={classNames}
    >
      <div className="text-3xl font-thin opacity-60 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="list-col-grow flex flex-col justify-center pl-3">
        <div className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          {option.text}
          {option.info && (
            <div className="tooltip" data-tip={option.info}>
              <Info size={16} className="text-slate-400" />
            </div>
          )}
        </div>
      </div>

      {isSelected ? (
        <CircleCheckBig size={32} className="text-white" />
      ) : (
        <CircleQuestionMark
          size={32}
          className={
            !!snap.selectedOption ? "text-slate-400/50" : "text-amber-500"
          }
        />
      )}
    </li>
  );
}
