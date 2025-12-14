'use client';

import { tabs } from '@/lib/tabsConfig';
import ToolPageLayout from '@/components/ToolPageLayout';
import ToolContentLayout from '@/components/ToolContentLayout';
import VideoPreview from '@/components/Video/VideoPreview';

export default function EditSubtitlesPage() {
  const tabConfig = tabs.find((tab) => tab.href === '/subtitles');
  const currentOption = 'Edit Subtitles';

  if (!tabConfig) return null;

  return (
    <ToolPageLayout tabConfig={tabConfig} currentOptionLabel={currentOption}>
        <ToolContentLayout
          tabConfig={tabConfig}
          previewComponent={<VideoPreview />}
          quickInfo={[
            { label: 'Expected Size', value: '50%' },
            { label: 'Format', value: 'SRT' },
            { label: 'Language', value: 'Custom' },
          ]}
        >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold !mb-4">Edit Subtitles</h2>
          </div>
      </ToolContentLayout>
    </ToolPageLayout>
  );
}

