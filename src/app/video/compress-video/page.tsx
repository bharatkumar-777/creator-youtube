'use client';

import { tabs } from '@/lib/tabsConfig';
import ToolPageLayout from '@/components/ToolPageLayout';
import ToolContentLayout from '@/components/ToolContentLayout';
import VideoPreview from '@/components/Video/VideoPreview';

export default function CompressVideoPage() {
  const tabConfig = tabs.find((tab) => tab.href === '/video');
  const currentOption = 'Compress Video';

  if (!tabConfig) return null;

  return (
    <ToolPageLayout tabConfig={tabConfig} currentOptionLabel={currentOption}>
      <ToolContentLayout
        tabConfig={tabConfig}
        previewComponent={<VideoPreview />}
        quickInfo={[
          { label: 'Expected Size', value: '50%' },
          { label: 'Compression', value: 'Medium' },
          { label: 'Quality', value: 'High' },
        ]}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold !mb-4">Compress Video</h2>
        </div>
      </ToolContentLayout>
    </ToolPageLayout>
  );
}

