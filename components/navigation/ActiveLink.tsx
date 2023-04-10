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
        className={`block px-2 hover:text-orange 
          ${router.asPath === href ? "text-orange" : " text-accent-7"}`}
      >
        {children}
      </Link>
    </li>
  );
}

export default ActiveLink;
