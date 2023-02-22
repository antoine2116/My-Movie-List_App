import Link from "next/link";

interface SidebarLinkProps {
  name: string;
  icon: React.ReactNode;
}

function SidebarLink({
  name,
  icon
} : SidebarLinkProps) {
  return (
    <li className="mb-2">
      <Link href="/" className="flex items-center text-xl space-x-4 group">
        <div className=" group-hover:text-red-500">
          {icon}
        </div>
        <div className="font-semibold group-hover:text-gray-800">
          {name}
        </div>
      </Link>
    </li>
  )
}

export default SidebarLink