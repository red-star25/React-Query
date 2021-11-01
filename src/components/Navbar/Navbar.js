import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center absolute left-0 right-0">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
          src="https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg"
          alt=""
          class="h-8 w-8"
        />
        <span class="ml-3 text-xl">React Query</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
        <Link
          to="/"
          class="mr-5 hover:text-white cursor-pointer hover:bg-indigo-500 transition-all duration-150 px-4 py-2 rounded-lg"
        >
          Home
        </Link>
        <Link
          to="/fruits"
          class="mr-5 hover:text-white cursor-pointer hover:bg-indigo-500 transition-all duration-150 px-4 py-2 rounded-lg"
        >
          Fruits
        </Link>
        <Link
          to="/fruits-react-query"
          class="mr-5 hover:text-white cursor-pointer hover:bg-indigo-500 transition-all duration-150 px-4 py-2 rounded-lg"
        >
          Fruits React-Query
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
