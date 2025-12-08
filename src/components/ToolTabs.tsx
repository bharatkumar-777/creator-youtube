'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

const tabs = [
  {
    nameKey: 'videoConverter',
    href: '/video-converter',
    color: '#8B9FFF',
    icon: '/assets/film.svg',
  },
  {
    nameKey: 'audioConverter',
    href: '/audio-converter',
    color: '#FFC510',
    icon: '/assets/headphone.svg',
  },
  {
    nameKey: 'subtitles',
    href: '/subtitles',
    color: '#EE5454',
    icon: '/assets/subs.svg',
  },
  {
    nameKey: 'fileConverter',
    href: '/file-converter',
    color: '#25D366',
    icon: '/assets/file.svg',
  },
];

export default function ToolTabs() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="flex gap-4 !mt-2">
      {tabs.map((tab) => {
        // Only highlight if pathname exactly matches or starts with the tab href, but not if it's just "/"
        const isActive = pathname && pathname !== '/' && pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex items-center gap-2 !px-6 !py-[11px] rounded-2xl text-[14px] font-medium transition-all ${
              isActive
                ? 'shadow-lg scale-105'
                : 'hover:shadow-md hover:scale-102'
            }`}
            style={{
              backgroundColor: isActive ? tab.color : `${tab.color}`,
              color: isActive ? 'black' : 'black',
              border: "2px solid black",
            }}
          >
            {/* <span className="text-xl">{tab.icon}</span> */}
            <Image src={tab.icon} alt={tab.nameKey} width={20} height={20} className='w-6 h-6' />
            <span>{t.tools[tab.nameKey as keyof typeof t.tools]}</span>
          </Link>
        );
      })}
    </div>
  );
}

