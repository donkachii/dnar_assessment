import React from "react";
import {
  Bars2Icon,
  ChartBarIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import "./sideMenu.scss";

const SideMenu = () => {
  return (
    <div className="flex flex-col items-center h-full w-full shadow-md px-1">
      <div className="mb-4 p-4 rounded-xl bar">
        <button type="button" className="p-1">
          <span className="sr-only">View notifications</span>
          <Bars2Icon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="rounded-xl bar p-4 h-full my-3">
        <div className="flex flex-col items-center">
          <button type="button" className="white p-1">
            <span className="sr-only">View notifications</span>
            <RectangleStackIcon className="h-5 w-5 white" aria-hidden="true" />
          </button>
          <button type="button" className="white p-1 mt-6">
            <span className="sr-only">View notifications</span>
            <ChartBarIcon className="h-5 w-5  white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
