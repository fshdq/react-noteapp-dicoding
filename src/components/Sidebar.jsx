import React from "react";
import SideLink from "./SideLink"
import { LightBulbIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="overflow-y-auto py-4 pr-3">
      <ul className="space-y-2">
        <SideLink link="/" name="Notes" icon={LightBulbIcon} />
        <SideLink link="/archives" name="Archives" icon={ArchiveBoxIcon} />
      </ul>
    </div>
  );
};

export default Sidebar;
