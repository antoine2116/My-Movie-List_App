import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../AuthContext";
import SearchButton from "../search/SearchButton";
import { useUI } from "../UIContext";
import { Button, LinkButton } from "../utils/Button/Button";
import Maybe from "../utils/Maybe";
import ActiveLink from "./ActiveLink";
import NavbarUserButton from "./UserDropdown";
import ThemeButton from "../utils/ThemeButton";
import { IoLogoGithub } from "react-icons/io5";

export default function Navbar() {
  const { openModal, setModalView } = useUI();
  const { loggedIn } = useAuth();

  const openLoginModal = () => {
    setModalView("LOGIN_VIEW");
    openModal();
  };

  const openSearchModal = () => {
    setModalView("SEARCH_VIEW");
    openModal();
  };

  return (
    <>
      <nav className="bg-primary-2 border-b border-accent-2 sticky top-0 z-10 flex-none w-full">
        <div className="py-3">
          <div className="mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-64 px-8">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex items-center"
                >
                  <span className="mr-3">
                    <Image
                      src="/icon.png"
                      width={32}
                      height={32}
                      alt="Logo"
                    />
                  </span>
                  <span className="self-center text-xl font-semibold whitespace-nowrap">
                    Apou&apos;s Films
                  </span>
                </Link>
              </div>
              <div className="flex justify-between flex-grow px-4">
                {/* Searchbar */}
                <div className="flex items-center">
                  <SearchButton onClick={openSearchModal} />
                </div>

                <div className="flex items-center space-x-2">
                  {/* Avatar */}
                  {loggedIn && <NavbarUserButton />}

                  {/* Github Link */}
                  <LinkButton
                    href="https://github.com/antoine2116/Apous-Films-Next.js"
                    target="_blank"
                    type="button"
                    color="transparent"
                    contentType="icon"
                  >
                    <IoLogoGithub className="text-lg" />
                  </LinkButton>

                  {/* Theme button */}
                  <ThemeButton />

                  {/* Login button */}
                  {!loggedIn && (
                    <Button
                      type="button"
                      onClick={openLoginModal}
                      color={"orange"}
                    >
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
