'use client';

import { tabs } from '@/lib/tabsConfig';
import ToolPageLayout from '@/components/ToolPageLayout';
import ToolContentLayout from '@/components/ToolContentLayout';
import VideoPreview from '@/components/Video/VideoPreview';
import CompactDropzoneCard from '@/components/CompactDropzoneCard';

export default function MergeAudioPage() {
  const tabConfig = tabs.find((tab) => tab.href === '/audio-converter');
  const currentOption = 'Merge Audio';

  if (!tabConfig) return null;

  return (
    <ToolPageLayout tabConfig={tabConfig} currentOptionLabel={currentOption}>
      <ToolContentLayout
        tabConfig={tabConfig}
        previewComponent={<VideoPreview />}
        quickInfo={[
          { label: 'Expected Size', value: '50%' },
          { label: 'Files', value: 'Multiple' },
          { label: 'Format', value: 'MP3' },
        ]}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Merge Audio</h2>
          <div className="max-w-2xl">
            <CompactDropzoneCard />
          </div>
        </div>
      </ToolContentLayout>
    </ToolPageLayout>
  );
}

