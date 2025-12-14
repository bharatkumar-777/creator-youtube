'use client';

import { tabs } from '@/lib/tabsConfig';
import ToolPageLayout from '@/components/ToolPageLayout';
import ToolContentLayout from '@/components/ToolContentLayout';
import VideoPreview from '@/components/Video/VideoPreview';

export default function VideoPage() {
  const tabConfig = tabs.find((tab) => tab.href === '/video');
  const currentOption = tabConfig?.options[0]?.label || '';

  if (!tabConfig) return null;

  return (
    <ToolPageLayout tabConfig={tabConfig} currentOptionLabel={currentOption}>
      <ToolContentLayout
        tabConfig={tabConfig}
        previewComponent={<VideoPreview />}
        quickInfo={[
          { label: 'Expected Size', value: '50%' },
          { label: 'Format', value: 'MP4' },
          { label: 'Quality', value: 'High' },
        ]}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold !mb-4">Video Converter</h2>
          <p className="text-gray-600">Select an option from the left sidebar to get started.</p>
        </div>
      </ToolContentLayout>
    </ToolPageLayout>
  );
}

