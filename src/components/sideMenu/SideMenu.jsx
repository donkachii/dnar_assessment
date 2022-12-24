import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bars2Icon,
  ChartBarIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import "./sideMenu.scss";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full shadow-md px-1">
      <div className="mb-4 p-4 rounded-xl bar">
        <button type="button" className="p-1">
          <span className="sr-only">View notifications</span>
          <Bars2Icon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="rounded-xl bar p-4 h-3/4 my-3">
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="white p-1"
            onClick={() => navigate("/")}
          >
            <span className="sr-only">View notifications</span>
            <RectangleStackIcon className="h-5 w-5 white" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="white p-1 mt-6"
            onClick={() => navigate("/charts")}
          >
            <span className="sr-only">View notifications</span>
            <ChartBarIcon className="h-5 w-5  white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
