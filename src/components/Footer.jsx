import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 border-t dark:border-slate-700 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-slate-800/70">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
       Muhammad Farras Shiddiq
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://www.linkedin.com/in/farras-shiddiq/" className="mr-4 hover:underline md:mr-6 ">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/farrasshiddiq/" className="mr-4 hover:underline md:mr-6">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
