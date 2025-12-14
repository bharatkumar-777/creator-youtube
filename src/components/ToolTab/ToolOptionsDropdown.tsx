'use client';

import { useRouter } from 'next/navigation';
import { TabOption, TabConfig } from '@/lib/tabsConfig';
import { getOptionRoute } from '@/lib/routeHelpers';

interface ToolOptionsDropdownProps {
  isOpen: boolean;
  color: string;
  options?: TabOption[];
  tabConfig?: TabConfig;
}

export default function ToolOptionsDropdown({
  isOpen,
  color,
  options = [],
  tabConfig,
}: ToolOptionsDropdownProps) {
  const router = useRouter();
  
  if (!isOpen) return null;

  const handleOptionClick = (option: TabOption) => {
    if (tabConfig) {
      const route = getOptionRoute(tabConfig, option.label);
      router.push(route);
    }
  };

  return (
    <div className="flex flex-row gap-3 flex-wrap">
      {options.length > 0 ? (
        options.map((option, index) => {
          const Icon = option.icon;
          return (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="flex items-center gap-2 !px-4 !py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md hover:opacity-80 cursor-pointer"
              style={{
                backgroundColor: `${color}20`,
                border: `1px solid ${color}40`,
              }}
            >
              <Icon className="w-5 h-5" />
              <span>{option.label}</span>
            </button>
          );
        })
      ) : (
        <div className="text-sm text-gray-500 italic p-3">
          Options will be available here
        </div>
      )}
    </div>
  );
}

