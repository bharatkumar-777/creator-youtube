'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ToolTabItem from './ToolTab/ToolTabItem';
import ToolTabExpanded from './ToolTab/ToolTabExpanded';

const tabs = [
  {
    nameKey: 'videoConverter',
    href: '/video-converter',
    color: '#8B9FFF',
    icon: '/assets/film.svg',
    options: ['Convert Format', 'Compress Video', 'Trim Video'],
  },
  {
    nameKey: 'audioConverter',
    href: '/audio-converter',
    color: '#FFC510',
    icon: '/assets/headphone.svg',
    options: ['Convert Format', 'Extract Audio', 'Merge Audio'],
  },
  {
    nameKey: 'subtitles',
    href: '/subtitles',
    color: '#EE5454',
    icon: '/assets/subs.svg',
    options: ['Generate Subtitles', 'Edit Subtitles', 'Translate'],
  },
  {
    nameKey: 'fileConverter',
    href: '/file-converter',
    color: '#25D366',
    icon: '/assets/file.svg',
    options: ['Convert Document', 'Compress File', 'Merge Files'],
  },
];

export default function ToolTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const [expandedTab, setExpandedTab] = useState<string | null>(null);

  const handleTabClick = (href: string) => {
    if (expandedTab === href) {
      setExpandedTab(null);
    } else {
      setExpandedTab(href);
      router.push(href);
    }
  };

  const activeTab = tabs.find((tab) => expandedTab === tab.href);

  return (
    <div className="flex flex-col gap-4 !mt-2">
      <div className="flex gap-4">
        {tabs.map((tab) => {
          const isActive = Boolean(
            pathname && pathname !== '/' && pathname.startsWith(tab.href)
          );
          const isExpanded = expandedTab === tab.href;

          return (
            <ToolTabItem
              key={tab.href}
              nameKey={tab.nameKey}
              href={tab.href}
              color={tab.color}
              icon={tab.icon}
              isActive={isActive}
              isExpanded={isExpanded}
              onTabClick={handleTabClick}
            />
          );
        })}
      </div>
      {activeTab && (
        <ToolTabExpanded
          isExpanded={true}
          color={activeTab.color}
          options={activeTab.options}
        />
      )}
    </div>
  );
}

