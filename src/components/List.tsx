import React from "react";
import { clsx } from "../utils/clsx";

interface ListProps<T> {
  content: T[];
  children: (data: T, index: number) => React.ReactNode;
}

export function List<T>({ content, children }: Readonly<ListProps<T>>) {
  return (
    <ul className="space-y-4 py-3">
      {content.map((data, index) => (
        <li key={index} className="relative flex gap-x-4">
          <div
            className={clsx(
              index === content.length - 1 ? "h-6" : "-bottom-6",
              "absolute top-0 left-0 flex w-6 justify-center"
            )}
          >
            <div className="w-px bg-gray-200" />
          </div>
          <div className="relative flex justify-center items-center size-6 flex-none rounded-full bg-white">
            <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
          </div>
          <div className="flex-auto">{children(data, index)}</div>
        </li>
      ))}
    </ul>
  );
}
