import { useRouter } from "next/dist/client/router";
import React, { ReactEventHandler, useState } from "react";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";

function SearchBar() {
  const router = useRouter();
  const search = getStringQueryParam("search", router.query);
  const [searchValue, setSearchValue] = useState(search);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleClearValue = () => {
    setSearchValue("");
  }

  const handleSearch = (e: React.FormEvent) => { 
    e.preventDefault();

    if (searchValue) {
      router.push({
        pathname: "/search",
        query: { search: searchValue },
      });
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-wrap justify-center items-center mx-auto py-4">
      <div className="relative w-full md:w-1/2 lg:1/3">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input type="search" id="search" name="search" value={searchValue} onChange={handleInputChange} className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none" placeholder="Search"></input>
        {searchValue && (
          <button type="button" onClick={handleClearValue} className="flex absolute inset-y-0 right-24 items-center pl-3">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        )}
        <button type="button" onClick={handleSearch} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
      </div>
    </form>
  )
}

export default SearchBar;