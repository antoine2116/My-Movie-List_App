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
}: SidebarLinkProps) {
  const router = useRouter();

  return (
    <li>
      <Link href={href} className="flex items-center text-md space-x-4 group">
        <div className={`flex items-center rounded-md bg-primary text-orange shadow p-1.5 group-hover:shadow-orange`}>
          {icon}
        </div>
        <div className={`font-semibold ${router.asPath === href ? "text-orange" : " text-accent-7"} group-hover:text-orange`}>
          {name}
        </div>
      </Link>
    </li>
  )
}

export default SidebarLink