import { IoCalendar, IoFlame, IoFlash, IoHome } from "react-icons/io5";
import GenreList from "../genres/GenreList";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="fixed z-20 inset-0 top-[3.8rem] w-64">
      <ul className="px-8 pt-4 h-full bg-primary-2 overflow-y-auto border-r border-accent-2">
        <ul className="mb-8 space-y-4">
          <SidebarLink href="/" name="Home" icon={<IoHome />} />
          <SidebarLink href="/popular" name="Popular" icon={<IoFlame />} />
          <SidebarLink href="/top-rated" name="Top Rated" icon={<IoFlash />} />
          <SidebarLink href="/upcoming" name="Upcoming" icon={<IoCalendar />} />
        </ul>
        <GenreList />
      </ul>
    </div>
  )
}

export default Sidebar;