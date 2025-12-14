'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ToolTabItem from './ToolTab/ToolTabItem';
import ToolTabExpanded from './ToolTab/ToolTabExpanded';
import { tabs } from '@/lib/tabsConfig';

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

