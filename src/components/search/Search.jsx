import React from "react";
import "./search.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="w-full search p-2 mb-6">
      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
      <input type="text" placeholder="search" />
    </div>
  );
};

export default Search;
