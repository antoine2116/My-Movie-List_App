import { Button} from "../utils/Button/Button";
import { useKeyPressShortcut } from "../../hooks/useKeyPress";

interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  useKeyPressShortcut("k", onClick);

  return (
    <Button type="button" color="white" className="px-10" onClick={onClick}>
      <svg aria-hidden="true" className="w-4 h-4 text-accent-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <div className="pl-4">Search...</div>
      <kbd className="bg-transparent text-orange border border-orange rounded px-2 ml-4 text-xs">Ctrl K</kbd>
    </Button>
  );
}

export default SearchButton;
