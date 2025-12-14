'use client';

import ToolOptionsDropdown from './ToolOptionsDropdown';
import { TabOption, TabConfig } from '@/lib/tabsConfig';

interface ToolTabExpandedProps {
  isExpanded: boolean;
  color: string;
  children?: React.ReactNode;
  options?: TabOption[];
  tabConfig?: TabConfig;
}

export default function ToolTabExpanded({
  isExpanded,
  color,
  children,
  options,
  tabConfig,
}: ToolTabExpandedProps) {
  if (!isExpanded) return null;

  return (
    <div className="mt-4">
      <div
        className="rounded-2xl !py-4 !px-2 min-h-[200px] transition-all"
        style={{
          border: `2px solid ${color}`,
        }}
      >
        {children || (
          <div className="flex flex-col gap-4">
            <ToolOptionsDropdown
              isOpen={true}
              color={color}
              options={options}
              tabConfig={tabConfig}
            />
          </div>
        )}
      </div>
    </div>
  );
}

