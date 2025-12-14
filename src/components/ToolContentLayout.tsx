'use client';

import { ReactNode } from 'react';
import { TabConfig } from '@/lib/tabsConfig';

interface ToolContentLayoutProps {
  tabConfig: TabConfig;
  previewComponent?: ReactNode;
  quickInfo?: Array<{ label: string; value: string }>;
  children?: ReactNode;
}

export default function ToolContentLayout({
  tabConfig,
  previewComponent,
  quickInfo = [],
  children,
}: ToolContentLayoutProps) {
  return (
    <div className="flex !gap-6">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col !gap-4">
        {/* Convert Tools Section - More compact */}
        {children && (
          <div
            className="bg-white rounded-2xl border-3 border-solid !p-4"
            style={{
              borderColor: tabConfig.color,
            }}
          >
            {children}
          </div>
        )}

        {/* Preview Section */}
        {previewComponent && (
          <div
            className="bg-white rounded-2xl border-3 border-solid !p-4"
            style={{
              borderColor: tabConfig.color,
            }}
          >
            {previewComponent}
          </div>
        )}

        {/* Quick Info Section */}
        {quickInfo.length > 0 && (
          <div
            className="bg-white rounded-2xl border-3 border-solid !p-4"
            style={{
              borderColor: tabConfig.color,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 !gap-4">
              {quickInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-gray-500 !mb-1">{info.label}</div>
                  <div
                    className="text-lg font-bold"
                    style={{ color: tabConfig.color }}
                  >
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar - Meta Information */}
      <div className="w-56 flex-shrink-0">
        <div
          className="bg-white rounded-2xl border-3 border-solid !p-4 h-full sticky top-0"
          style={{
            borderColor: tabConfig.color,
          }}
        >
          <h3 className="font-bold text-base !mb-3">Meta Information</h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="text-gray-500 !mb-1">File Type</div>
              <div className="font-medium text-xs">Supported formats</div>
            </div>
            <div>
              <div className="text-gray-500 !mb-1">Max Size</div>
              <div className="font-medium text-xs">200 MB (free)</div>
            </div>
            <div>
              <div className="text-gray-500 !mb-1">Processing</div>
              <div className="font-medium text-xs">Cloud-based</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

