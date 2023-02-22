import { IoFlame } from "react-icons/io5";
import GenreList from "../genres/GenreList";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="fixed z-20 inset-0 top-[4.375rem] w-64">
      <ul className="px-8 pt-4 h-full bg-white overflow-y-auto border-r border-gray-200">
        <ul className="mb-5">
          <SidebarLink name="Popular" icon={<IoFlame />} />
        </ul>
        <GenreList />
      </ul>
    </div>
  )
}

export default Sidebar;