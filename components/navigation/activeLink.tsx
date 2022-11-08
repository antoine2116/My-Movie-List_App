import { useRouter } from "next/router";

export default function ActiveLink({children, href}: {children: React.ReactNode, href: string}) {
  const router = useRouter();
  const defaultClasses: string = "block px-2 text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700";
  const classes:string = router.pathname === href ? `${defaultClasses} bg-transparent text-blue-700` : defaultClasses;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} className={classes}>
      {children}
    </a>
  )
}