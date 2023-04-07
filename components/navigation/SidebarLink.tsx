import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarLinkProps {
  href: string;
  name: string;
  icon: React.ReactNode;
}

function SidebarLink({
  href,
  name,
  icon
} : SidebarLinkProps) {
  const router = useRouter();
  
  return (
    <li>
      <Link href={href} className="flex items-center text-md space-x-4 group">
        <div className={`flex items-center rounded-md border border-gray-100  text-orange-600 shadow p-1 group-hover:shadow-orange-600/70`}>
          {icon}
        </div>
        <div className={`font-semibold ${router.asPath === href ? "text-orange-600" : " text-gray-700"}`}>
          {name}
        </div>
      </Link>
    </li>
  )
}

export default SidebarLink