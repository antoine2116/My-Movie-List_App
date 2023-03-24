interface SearchInputProps {
  onClick: () => void
}

function SearchInput({
  onClick
}: SearchInputProps) {
  return (
    <div>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <div 
        className="rounded-lg block p-2.5 pl-10 w-full text-sm text-gray-800 border border-gray-300 focus:outline-none cursor-pointer"
        onClick={onClick}>
        Search for a movie...
      </div>
    </div>
  )
}

export default SearchInput;