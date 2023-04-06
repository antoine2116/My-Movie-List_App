import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
  children: React.ReactNode;
  href: string;
}

function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter();

  return (
    <li>
      <Link
        href={href}
        className={`block px-2 hover:text-orange-700 
          ${router.asPath === href ? "text-orange-700" : " text-gray-700"}`}
      >
        {children}
      </Link>
    </li>
  );
}

export default ActiveLink;
