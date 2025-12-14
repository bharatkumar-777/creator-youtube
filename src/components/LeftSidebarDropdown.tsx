'use client';

import Image from 'next/image';
import { TabConfig, TabOption } from '@/lib/tabsConfig';
import { useRouter, usePathname } from 'next/navigation';
import { getOptionRoute } from '@/lib/routeHelpers';

interface LeftSidebarDropdownProps {
  tabConfig: TabConfig;
  currentOptionLabel: string;
}

export default function LeftSidebarDropdown({
  tabConfig,
  currentOptionLabel,
}: LeftSidebarDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleOptionClick = (option: TabOption) => {
    const route = getOptionRoute(tabConfig, option.label);
    router.push(route);
  };

  return (
    <div className="w-56 flex-shrink-0">
      <div className="bg-white rounded-2xl border-3 border-solid border-black !p-4 h-full sticky top-0">
        <div className="relative !mb-4">
          {/* Circular design similar to DropzoneCard - smaller */}
          <div className="relative">
            <div className="w-24 h-24 z-10 relative rounded-full flex items-center justify-center !mb-2">
              <Image
                src={tabConfig.icon}
                alt={tabConfig.nameKey}
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="w-20 h-20 absolute top-0 left-0 rounded-full bg-accent-yellow flex items-center justify-center"></div>
            <div
              className="absolute top-5 -right-2 w-20 h-20 rounded-full"
              style={{ backgroundColor: tabConfig.color }}
            ></div>
            <div className="absolute -bottom-2 -left-3 w-16 h-16 rounded-full bg-[#25D366]"></div>
          </div>
        </div>

        {/* Dropdown Options */}
        <div className="space-y-2">
          {tabConfig.options.map((option, index) => {
            const Icon = option.icon;
            const isActive = option.label === currentOptionLabel;
            const route = getOptionRoute(tabConfig, option.label);
            const isCurrentRoute = pathname === route;

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full flex items-center gap-2 !px-3 !py-2.5 rounded-lg font-medium transition-all text-sm ${
                  isCurrentRoute || isActive
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-90'
                }`}
                style={{
                  backgroundColor:
                    isCurrentRoute || isActive
                      ? `${tabConfig.color}30`
                      : `${tabConfig.color}15`,
                  border: `1px solid ${
                    isCurrentRoute || isActive
                      ? tabConfig.color
                      : `${tabConfig.color}40`
                  }`,
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

