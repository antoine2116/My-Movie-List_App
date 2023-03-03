import { IoCalendar, IoFlame, IoFlash } from "react-icons/io5";
import GenreList from "../genres/GenreList";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="fixed z-20 inset-0 top-[4.375rem] w-64">
      <ul className="px-8 pt-4 h-full bg-white overflow-y-auto border-r border-gray-200">
        <ul className="mb-8 space-y-4">
          <SidebarLink href="/" name="Popular" icon={<IoFlame />} />
          <SidebarLink href="/" name="Lastest" icon={<IoFlash />} />
          <SidebarLink href="/" name="Upcoming" icon={<IoCalendar />} />
        </ul>
        <GenreList />
      </ul>
    </div>
  )
}

export default Sidebar;