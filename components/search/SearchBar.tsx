import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo, useState } from "react";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";
import { getAllResults } from "../../common/helpers/Utils";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { useUI } from "../UIContext";
import SearchButton from "./SearchButton";

function SearchBar() {
  const router = useRouter();
  const search = getStringQueryParam("search", router.query);

  const [searchValue, setSearchValue] = useState(search);
  const [isFocused, setIsFocused] = useState(false);
  const [isSuggestionsVisibible, setIsSuggestionsVisible] = useState(false);
  const [ignoreBlur, setIgnoreBlur] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const { setModalView, openModal, closeModal } = useUI();

  const {data, status} = useInfiniteQuery<PaginationResponse<Movie>>(TmdbQueries.searchMovie(searchValue));

  const options = useMemo<Movie[]>(
    () => data ? getAllResults(data) : [],
    [data]
  );

  useEffect(() => {
    setSearchValue(search);
  }, [router.query, search]);

  useEffect(() => {
    if (isFocused &&
      searchValue.length > 0) {
      setIsSuggestionsVisible(true);
    } else {
      setIsSuggestionsVisible(false);
    }

    setSelectedItemIndex(-1);

  }, [isFocused, searchValue]);

  const openSearchModal = () => {
    setModalView("SEARCH_VIEW");
    openModal();
  }

  const handleSetSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleClearSearch = () => {
    setSearchValue("");
  }

  const handleInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputBlur = () => {
    setIsFocused(!!ignoreBlur);
  }

  const handleMouseEnter = () => {
    setIgnoreBlur(true);
  }

  const handleMouseLeave = () => {
    setIgnoreBlur(false);
  }

  const closeSuggestions = () => {
    setIsSuggestionsVisible(false);
    setIgnoreBlur(false);
    setIsFocused(false);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        setSelectedItemIndex((prevIndex) => {
          if (prevIndex === options.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
        break;

      case "ArrowUp":
        event.preventDefault();

        setSelectedItemIndex((prevIndex) => {
          if (prevIndex === 0) {
            return options.length - 1;
          } else {
            return prevIndex - 1;
          }
        });
        break;

      case "Enter":
        event.preventDefault();
        
        if (selectedItemIndex !== -1) {
          const movie = options[selectedItemIndex];
          router.push(`/movie/${movie.id}`);
        } else {
          performSearch();
        }

        closeSuggestions();

        break;

      case "Escape":
        closeSuggestions();
        break;
        
      default:
        break;
    }
  }

  const performSearch = () => {
    if (searchValue) {
      router.push({
        pathname: "/search",
        query: { search: searchValue },
      });
    }
  };

  return (
      <div className={`relative ${isFocused ? "w-[30rem]" : "w-[15rem]"} transition-all ease-in-out duration-300`}>

        {/* <SearchSuggestionList
          options={options}
          visible={isSuggestionsVisibible}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isLoading={status === "loading"}
          selectedItemIndex={selectedItemIndex}
        /> */}
      </div>
  )
}

export default SearchBar;