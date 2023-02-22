interface AuthButtonProps {
  label: string;
}

function AuthButton({
  label,
}: AuthButtonProps) {
  return (
    <div className="flex items-center justify-center">
      <button type="button" className="block text-white bg-orange-600 hover:bg-orange-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center">
        {label}
      </button>
    </div>
  )
}

export default AuthButton;