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
        <IoPersonCircle
          className="text-4xl text-orange-600 hover:text-orange-500 cursor-pointer transition-transform ease-in-out hover:scale-110"
          onClick={() => setDisplay(!display)}
        />
        {
          display && (
            <div className="z-10 absolute right-0 border border-gray-200 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-52">
              <div className="px-4 py-3 text-sm text-gray-900">
                <div>Signed in as</div>
                <div className="font-medium truncate">{(user && user.email)}</div>
              </div>
              <ul className="overflow-hidden">
                <li className="px-4 py-3 hover:bg-gray-200 cursor-pointer">
                  <a
                    className="block text-sm text-gray-700"
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