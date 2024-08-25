import Image from 'next/image';

import beerIcon from '@/public/icons/beer.png';
import cafeIcon from '@/public/icons/cafe.png';
import restaurantIcon from '@/public/icons/restaurant.png';

const Icons = {
  restaurant: { color: 'bg-[#F3D0C3]', src: restaurantIcon, alt: '식당' },
  cafe: { color: 'bg-[#EDBEE4]', src: cafeIcon, alt: '카페' },
  beer: { color: 'bg-[#BCD7EA]', src: beerIcon, alt: '맥주' },
};

export type IconType = 'restaurant' | 'cafe' | 'beer';

interface IconProps {
  type: IconType;
}

const Icon = ({ type }: IconProps) => {
  const icon = Icons[type];

  return (
    <div className={`w-6 rounded-full p-1 ${icon.color}`}>
      <Image src={icon.src} alt={icon.alt} />
    </div>
  );
};

export default Icon;
