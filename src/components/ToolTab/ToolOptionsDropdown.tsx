'use client';

import { TabOption } from '@/lib/tabsConfig';

interface ToolOptionsDropdownProps {
  isOpen: boolean;
  color: string;
  options?: TabOption[];
}

export default function ToolOptionsDropdown({
  isOpen,
  color,
  options = [],
}: ToolOptionsDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="flex flex-row gap-3 flex-wrap">
      {options.length > 0 ? (
        options.map((option, index) => {
          const Icon = option.icon;
          return (
            <button
              key={index}
              className="flex items-center gap-2 !px-4 !py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md hover:opacity-80"
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

