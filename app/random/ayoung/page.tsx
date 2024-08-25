import { IconType } from '@/app/components/common/Icon';
import SidebarList from '@/app/components/SidebarList';

const mockList: { id: string; category: IconType; name: string; address: string; isBookmarked: boolean }[] = [
  {
    id: crypto.randomUUID(),
    category: 'restaurant',
    name: '후라토식당 원주점',
    address: '강원특별자치도 원주시 능라동길 51',
    isBookmarked: true,
  },
  {
    id: crypto.randomUUID(),
    category: 'cafe',
    name: '플스웨이커피',
    address: '강원특별자치도 원주시 솔우물2길 19-1',
    isBookmarked: false,
  },
  {
    id: crypto.randomUUID(),
    category: 'cafe',
    name: '전람회의 그림',
    address: '부산광역시 금정구 금강로 280',
    isBookmarked: false,
  },
  {
    id: crypto.randomUUID(),
    category: 'beer',
    name: '호타루',
    address: '부산광역시 수영구 민락수변로 49',
    isBookmarked: true,
  },
];

const Ayoung = () => {
  return (
    <div className="bg-red-800 p-4">
      <SidebarList list={mockList} />
    </div>
  );
};

export default Ayoung;
