import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo, useState } from "react";
import { APIQueries } from "../../common/APIQueries";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import SearchInput from "./SearchInput";
import SearchSuggestionList from "./SearchSuggestionList";

function SearchBar() {
  const router = useRouter();
  const search = getStringQueryParam("search", router.query);

  const [searchValue, setSearchValue] = useState(search);
  const [isFocused, setIsFocused] = useState(false);
  const [isSuggestionsVisibible, setIsSuggestionsVisible] = useState(false);

  const {data, status} = useQuery<PaginationResponse<Movie>>(APIQueries.searchMovie(searchValue));

  const options = useMemo<Movie[]>(
    () => data?.results ?? [],
    [data]
  );

  useEffect(() => {
    if (isFocused &&
      searchValue.length > 0) {
      setIsSuggestionsVisible(true);
    } else {
      setIsSuggestionsVisible(false);
    }
  }, [isFocused, searchValue]);

  const handleSetSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleClearSearch = () => {
    setSearchValue("");
  }

  const handleInputFocus = () => {
    setIsFocused(true);
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
    <div className="flex flex-wrap justify-center items-center mx-auto py-4">
      <div className="relative w-full md:w-1/2 lg:1/3">
        <SearchInput 
          search={searchValue}
          onChange={handleSetSearchValue}
          onClear={handleClearSearch}
          onFocus={handleInputFocus}
          suggestionsVisible={isSuggestionsVisibible}
        />
        <SearchSuggestionList
          options={options}
          visible={isSuggestionsVisibible}
          isLoading={status === "loading"}
        />
      </div>
    </div>
  )
}

export default SearchBar;