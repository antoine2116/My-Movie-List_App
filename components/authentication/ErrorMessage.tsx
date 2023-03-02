import { IoCloseCircleSharp } from "react-icons/io5";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({
  message
} : ErrorMessageProps) {
  return (
    <div className="bg-red-50 rounded-lg p-3">
      <div className="flex flex-row">
        <div className="text-red-400 text-lg">
          <IoCloseCircleSharp />
        </div>
        <div className="text-red-700 text-sm whitespace-pre-line ml-3 first-letter:capitalize">
          {message}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage;