'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AudioConverterPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {t.tools.audioConverter}
      </h2>
      <p className="text-gray-600 mb-6">
        Convert your audio files to different formats. Upload a file above to get started.
      </p>
      <div className="bg-white rounded-lg p-6">
        <p className="text-gray-500 text-center">
          Audio conversion options will appear here after you upload a file.
        </p>
      </div>
    </div>
  );
}

