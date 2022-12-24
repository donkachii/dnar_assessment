import React from "react";
import SideMenu from "../sideMenu/SideMenu";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row flex-nowrap main w-screen">
      <div className="flex grow-0 shrink-0 basis-20 min-h-screen pt-5">
        <SideMenu />
      </div>
      {children}
    </div>
  );
};

export default Layout;
