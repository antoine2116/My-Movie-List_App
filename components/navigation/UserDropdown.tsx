import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useAuth } from "../AuthContext";
import OutsideClickHandler from "react-outside-click-handler";
import { toast } from "react-toastify";

function NavbarUserButton() {
  const [display, setDisplay] = useState(false);
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("You have been logged out");
  }

  return (
    <OutsideClickHandler disabled={!display} onOutsideClick={() => setDisplay(false)}>
      <div className="relative">
        {/* Avatar */}
        <div 
          className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-orange-600 hover:bg-orange-500 ring-2 ring-offset-2 ring-orange-400 rounded-full cursor-pointer transition-transform ease-in-out hover:scale-110"
          onClick={() => setDisplay(!display)}
        >
          <span className="font-medium text-white uppercase">{(user && user.email[0])}</span>
        </div>
        {/* Dropdown */}
        {
          display && (
            <div className="z-10 absolute right-0 top-11 border border-gray-200 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-52 overflow-hidden">
              <div className="px-3 py-2 text-sm text-gray-900">
                <div>Signed in as</div>
                <div className="font-medium truncate text-sm">{(user && user.email)}</div>
              </div>
              <ul className="overflow-hidden">
                <li className="">
                  <a
                    className="block text-sm text-gray-700 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )
        }
      </div>
    </OutsideClickHandler>
  )
}

export default NavbarUserButton;