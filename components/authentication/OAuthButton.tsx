import Image from 'next/image';
import Button from '../utils/Button/Button';

interface OAuthButtonProps {
  label: string;
  icon: string;
}

function OAuthButton({
  label,
  icon,
}: OAuthButtonProps) {
  return (
    <Button
      type="button"
      color="white"
      className="w-full"
    >
      <Image src={icon} alt={label} height="20" width="20" className="mr-3" />
      {label}
    </Button>
  )
}

export default OAuthButton;