interface ClearIconProps {
  search: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ClearIncon({
  search,
  onClick,
} : ClearIconProps) {

  if (!search) return null;

  return (
    <button 
      type="button" 
      className="flex absolute inset-y-0 right-5 items-center pl-3"
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </button>
  )
}

export default ClearIncon;