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
    <Link href={href}>
      <Button
        type="button"
        color="white"
        className="w-full"
      >
        <Image src={icon} alt={label} height="20" width="20" className="mr-3" />
        {label}
      </Button>
    </Link>
  )
}

export default OAuthButton;