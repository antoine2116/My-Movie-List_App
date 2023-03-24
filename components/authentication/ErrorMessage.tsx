import { IoCloseCircleSharp } from "react-icons/io5";
import { InputError, RestAPIError } from "../../common/clients/RestAPIClient";

interface ErrorMessageProps {
  error: RestAPIError;
}

function ErrorMessage({
  error
} : ErrorMessageProps) {
  return (
    <div className="bg-red-50 rounded-lg p-3">
      <div className="flex flex-row">
        <div className="text-red-400 text-lg">
          <IoCloseCircleSharp />
        </div>
        <div className="text-red-700 text-sm ml-3">
          {error.message && 
            <div className="first-letter:capitalize">
              {error.message}
            </div>
          }

          {error.errors.length > 0 &&
            error.errors.map((e: InputError, i) => (
              <div key={i}>
                {e.error}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage;