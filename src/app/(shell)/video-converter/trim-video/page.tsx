'use client';

import { tabs } from '@/lib/tabsConfig';
import ToolPageLayout from '@/components/ToolPageLayout';
import ToolContentLayout from '@/components/ToolContentLayout';
import VideoPreview from '@/components/Video/VideoPreview';
import CompactDropzoneCard from '@/components/CompactDropzoneCard';

export default function VideoTrimPage() {
  const tabConfig = tabs.find((tab) => tab.href === '/video-converter');
  const currentOption = 'Trim Video';

  if (!tabConfig) return null;

  return (
    <ToolPageLayout tabConfig={tabConfig} currentOptionLabel={currentOption}>
      <ToolContentLayout
        tabConfig={tabConfig}
        previewComponent={<VideoPreview />}
        quickInfo={[
          { label: 'Expected Size', value: '50%' },
          { label: 'Duration', value: 'Custom' },
          { label: 'Format', value: 'MP4' },
        ]}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Trim Video</h2>
          <div className="max-w-2xl">
            <CompactDropzoneCard />
          </div>
        </div>
      </ToolContentLayout>
    </ToolPageLayout>
  );
}

