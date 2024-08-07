import Image from 'next/image';
import restaurantIcon from '@/public/icons/restaurant.png';
import cafeIcon from '@/public/icons/cafe.png';
import beerIcon from '@/public/icons/beer.png';

const Icons = {
  restaurant: { color: '#F3D0C3', src: restaurantIcon, alt: '식당' },
  cafe: { color: '#EDBEE4', src: cafeIcon, alt: '카페' },
  beer: { color: '#BCD7EA', src: beerIcon, alt: '맥주' },
};

type IconType = 'restaurant' | 'cafe' | 'beer';

interface IconProps {
  type: IconType;
}

const Icon = ({ type }: IconProps) => {
  const icon = Icons[type];

  return (
    <div className="w-6 rounded-full p-1" style={{ backgroundColor: icon.color }}>
      <Image src={icon.src} alt={icon.alt} />
    </div>
  );
};

export default Icon;
