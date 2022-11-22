import ClearIncon from "./ClearIcon";

interface SearchInputProps {
  search: string;
  suggestionsVisible: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClear: React.MouseEventHandler<HTMLButtonElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}

function SearchInput({ 
  search, 
  onChange,
  onClear,
  onFocus,
  suggestionsVisible
}: SearchInputProps) {

  return (
    <>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
        className={`${suggestionsVisible ? "rounded-t-lg" : "rounded-lg"} block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-200 focus:outline-none`}
        type="text" 
        id="search" 
        name="search" 
        placeholder="Search"
        autoComplete="off"
        value={search}
        onChange={onChange}
        onFocus={onFocus}
      ></input>
      <ClearIncon 
        search={search}
        onClick={onClear}
      />
    </>
  )
}

export default SearchInput;