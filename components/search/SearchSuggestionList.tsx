import SearchSuggestionItem from "./SearchSuggestionItem";

function SearchSuggestionList() {
  return (
    <div className="absolute z-10 w-full shadow-lg">
      <div className="bg-white border border-t-0 border-gray-200 rounded-b-md">
        <ul className="p-0 m-0 divide-y divide-gray-200">
          <SearchSuggestionItem />
          <SearchSuggestionItem />
          <SearchSuggestionItem />
          <SearchSuggestionItem />
          <SearchSuggestionItem />
          <SearchSuggestionItem />
        </ul>
      </div>
    </div>
  )  
}

export default SearchSuggestionList;