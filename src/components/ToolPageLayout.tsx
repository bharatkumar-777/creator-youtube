'use client';

import { ReactNode } from 'react';
import { TabConfig } from '@/lib/tabsConfig';
import LeftSidebarDropdown from './LeftSidebarDropdown';

interface ToolPageLayoutProps {
  tabConfig: TabConfig;
  currentOptionLabel: string;
  children: ReactNode;
}

export default function ToolPageLayout({
  tabConfig,
  currentOptionLabel,
  children,
}: ToolPageLayoutProps) {
  return (
    <div className="w-full flex !gap-6 min-h-[calc(100vh-80px)] !px-8 !py-6">
      {/* Left Sidebar - Dropdown */}
      <LeftSidebarDropdown
        tabConfig={tabConfig}
        currentOptionLabel={currentOptionLabel}
      />

      {/* Center Content */}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

