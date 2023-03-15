import Image from 'next/image';
import Button from '../utils/Button/Button';
import Link from 'next/link';

interface OAuthButtonProps {
  label: string;
  icon: string;
  href: string;
}

function OAuthButton({
  label,
  icon,
  href,
}: OAuthButtonProps) {
  return (
    <Button
      type="button"
      color="white"
      className="w-full"
    >
      <Link href={href} className="inline-flex">
        <Image src={icon} alt={label} height="20" width="20" className="mr-3" />
        {label}
      </Link>
    </Button>
  )
}

export default OAuthButton;