'use client';

import { tabs } from '@/lib/tabsConfig';
import ToolPageLayout from '@/components/ToolPageLayout';
import ToolContentLayout from '@/components/ToolContentLayout';
import VideoPreview from '@/components/Video/VideoPreview';

export default function ExtractAudioPage() {
  const tabConfig = tabs.find((tab) => tab.href === '/audio');
  const currentOption = 'Extract Audio';

  if (!tabConfig) return null;

  return (
    <ToolPageLayout tabConfig={tabConfig} currentOptionLabel={currentOption}>
      <ToolContentLayout
        tabConfig={tabConfig}
        previewComponent={<VideoPreview />}
        quickInfo={[
          { label: 'Expected Size', value: '50%' },
          { label: 'Format', value: 'MP3' },
          { label: 'Bitrate', value: '128kbps' },
        ]}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold !mb-4">Extract Audio</h2>
        </div>
      </ToolContentLayout>
    </ToolPageLayout>
  );
}

