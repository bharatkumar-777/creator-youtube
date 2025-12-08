'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const tabs = [
  {
    nameKey: 'videoConverter',
    href: '/video-converter',
    color: '#8B9FFF',
    icon: '📹',
  },
  {
    nameKey: 'audioConverter',
    href: '/audio-converter',
    color: '#FFC510',
    icon: '🎵',
  },
  {
    nameKey: 'subtitles',
    href: '/subtitles',
    color: '#FC0A32',
    icon: '💬',
  },
  {
    nameKey: 'fileConverter',
    href: '/file-converter',
    color: '#25D366',
    icon: '📄',
  },
];

export default function ToolTabs() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="flex gap-3 mt-6">
      {tabs.map((tab) => {
        // Only highlight if pathname exactly matches or starts with the tab href, but not if it's just "/"
        const isActive = pathname && pathname !== '/' && pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              isActive
                ? 'shadow-lg scale-105'
                : 'hover:shadow-md hover:scale-102'
            }`}
            style={{
              backgroundColor: isActive ? tab.color : `${tab.color}20`,
              color: isActive ? 'white' : tab.color,
              border: isActive ? `2px solid ${tab.color}` : `2px solid ${tab.color}40`,
            }}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{t.tools[tab.nameKey as keyof typeof t.tools]}</span>
          </Link>
        );
      })}
    </div>
  );
}

