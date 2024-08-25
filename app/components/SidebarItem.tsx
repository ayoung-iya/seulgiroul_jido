import { MouseEventHandler } from 'react';

import Image from 'next/image';

import Icon, { IconType } from '@/app/components/common/Icon';
import bookmarkFilled from '@/public/icons/bookmark-filled.svg';
import bookmark from '@/public/icons/bookmark.svg';
import chevron from '@/public/icons/chevron.svg';

interface SideItemProps {
  id: string;
  category: IconType;
  name: string;
  address: string;
  selectedId: string;
  handleChangeSelectedId: MouseEventHandler;
  isBookmarked: boolean;
}

const SidebarItem = ({
  id,
  category,
  name,
  address,
  selectedId,
  handleChangeSelectedId,
  isBookmarked,
}: SideItemProps) => {
  return (
    <li className="w-full rounded-md bg-bluebell-100 p-2">
      <button type="button" className="flex w-full items-center justify-between" onClick={handleChangeSelectedId}>
        <div className="flex items-center gap-2 *:flex-shrink-0">
          <Icon type={category} />
          <span className="font-btn-3 flex-shrink-0">{name}</span>
        </div>
        <Image src={chevron} alt="갈매기표" className={id === selectedId ? 'rotate-180' : ''} width={20} height={20} />
      </button>
      {id === selectedId && (
        <>
          <hr className="my-2 border-bluebell-200" />
          <span className="font-body-3">{address}</span>
          <div className="text-right">
            <button type="button">
              {isBookmarked ? (
                <Image src={bookmarkFilled} alt="북마크함" width={16} height={16} />
              ) : (
                <Image src={bookmark} alt="북마크안함" width={16} height={16} />
              )}
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default SidebarItem;
