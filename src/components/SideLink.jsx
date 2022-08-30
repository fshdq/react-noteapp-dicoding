import React from "react";
import { NavLink } from "react-router-dom";

const SideLink = (props) => {
  const TheIcon = props.icon;
  const defaultClass = 'group rounded-r-2xl transition-colors ease-in-out flex items-center py-3 px-4 text-base font-normal text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-sky-600 dark:hover:bg-sky-500'
  const activeClass = 'group rounded-r-2xl transition-colors ease-in-out flex items-center py-3 px-4 text-base font-normal text-white bg-sky-500 hover:bg-sky-600 hover:text-slate-400'
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) => (isActive ? activeClass : defaultClass)}
    >
      <TheIcon className="flex-shrink-0 w-6 h-6" />
      <span className="flex-1 ml-3 whitespace-nowrap">{props.name}</span>
    </NavLink>
  );
};

export default SideLink;
