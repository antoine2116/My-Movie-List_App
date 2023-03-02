import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { removeUserToken } from "../../common/auth/UserToken";
import { useAuth } from "../AuthContext";
import OutsideClickHandler from "react-outside-click-handler";

function NavbarUserButton() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  const toggleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  }

  return (
    <div className="relative">
      <IoPersonCircle
        className="text-4xl text-orange-600 hover:text-orange-500 cursor-pointer transition-transform ease-in-out hover:scale-110"
        onClick={toggleDropdown} 
      />
      { 
        displayDropdown && (
          <OutsideClickHandler onOutsideClick={toggleDropdown}>
            <div className="z-10 absolute right-0 border border-gray-100 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-48">
              <div className="px-4 py-3 text-sm text-gray-900">
                <div>Signed in as</div>
                <div className="font-medium">placeholder@gmail.com</div>
              </div>
              <ul>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <a
                    className="block text-sm text-gray-700"
                    onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </OutsideClickHandler>
        )
      }
    </div>
  )
}

export default NavbarUserButton;