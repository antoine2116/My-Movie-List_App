import Image from 'next/image';
import { getImageUrl } from '../../common/helpers/ImageHelper';

interface CarrouselItemProps {
  image_path: string;
  title: string;
  subtitle?: string;
}

function CarrouselItem({
  image_path,
  title,
  subtitle
}: CarrouselItemProps) {
  return (
    <div className="min-w-[8rem] w-[8rem] snap-start">
      <Image
        src={getImageUrl(image_path)}
        width={500}
        height={750}
        alt={title}
        className="rounded-lg object-cover block w-full h-auto aspect-[2/3]"
      />
      <div className="text-black text-sm font-semibold max-w-full truncate mt-1" title={title}>
        {title}
      </div>

      {subtitle && (
        <div className="text-gray-400 text-xs">
          {subtitle}
        </div>
      )}
    </div>
  )
}

export default CarrouselItem;