'use client';

import { useState } from 'react';

import { IconType } from '@/app/components/common/Icon';

import SidebarItem from './SidebarItem';

interface SidebarList {
  list: { id: string; category: IconType; name: string; address: string; isBookmarked: boolean }[];
}

const SidebarList = ({ list }: SidebarList) => {
  const [selectedId, setSelectedId] = useState('');

  const changeSelectedId = (id: string) => () => {
    if (selectedId === id) {
      setSelectedId('');
      return;
    }

    setSelectedId(id);
  };

  return (
    <ul className="flex flex-col gap-2 rounded-md bg-bluebell-300 bg-opacity-90 p-2">
      {list.map((info) => (
        <SidebarItem
          key={info.id}
          {...info}
          selectedId={selectedId}
          handleChangeSelectedId={changeSelectedId(info.id)}
        />
      ))}
    </ul>
  );
};

export default SidebarList;
