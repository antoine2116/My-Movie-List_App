import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useAuth } from "../AuthContext";
import OutsideClickHandler from "react-outside-click-handler";
import { toast } from "react-toastify";
import { Transition } from "@headlessui/react";

function NavbarUserButton() {
  const [display, setDisplay] = useState(false);
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("You have been logged out");
  };

  return (
    <OutsideClickHandler
      disabled={!display}
      onOutsideClick={() => setDisplay(false)}
    >
      <div className="relative">
        {/* Avatar */}
        <div
          className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-orange hover:bg-orange ring-2 ring-offset-2 ring-orange rounded-full cursor-pointer transition-transform ease-in-out hover:scale-110"
          onClick={() => setDisplay(!display)}
        >
          <span className="font-medium text-white uppercase">{user && user.email[0]}</span>
        </div>
        {/* Dropdown */}
        <Transition
          show={display}
          enter="transition duration-100 ease-linear"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="z-10 absolute right-0 top-3 border border-accent-2 bg-primary divide-y divide-accent-2 rounded-lg shadow-md w-52 overflow-hidden">
            <div className="px-3 py-2 text-sm text-accent-8">
              <div>Signed in as</div>
              <div className="font-medium truncate text-sm">{user && user.email}</div>
            </div>
            <ul className="overflow-hidden">
              <li className="">
                <a
                  className="block text-sm text-accent-7 px-3 py-2 hover:bg-accent-2 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </OutsideClickHandler>
  );
}

export default NavbarUserButton;
