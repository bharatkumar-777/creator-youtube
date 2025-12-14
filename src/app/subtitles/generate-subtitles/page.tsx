'use client';

import { tabs } from '@/lib/tabsConfig';
import ToolPageLayout from '@/components/ToolPageLayout';
import ToolContentLayout from '@/components/ToolContentLayout';
import VideoPreview from '@/components/Video/VideoPreview';

export default function GenerateSubtitlesPage() {
  const tabConfig = tabs.find((tab) => tab.href === '/subtitles');
  const currentOption = 'Generate Subtitles';

  if (!tabConfig) return null;

  return (
    <ToolPageLayout tabConfig={tabConfig} currentOptionLabel={currentOption}>
        <ToolContentLayout
          tabConfig={tabConfig}
          previewComponent={<VideoPreview />}
          quickInfo={[
            { label: 'Expected Size', value: '50%' },
            { label: 'Format', value: 'SRT' },
            { label: 'Language', value: 'Auto' },
          ]}
        >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold !mb-4">Generate Subtitles</h2>
          </div>
      </ToolContentLayout>
    </ToolPageLayout>
  );
}

