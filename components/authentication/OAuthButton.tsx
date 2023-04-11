import Image from 'next/image';
import { LinkButton } from '../utils/Button/Button';

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
    <div>
      <LinkButton
        href={href}
        type="button"
        color="white"
        className="w-full"
      >
        <Image
          src={icon}
          alt={label}
          height="20"
          width="20"
          className="mr-3"
        />
        {label}
      </LinkButton>
    </div>
  );
}

export default OAuthButton;