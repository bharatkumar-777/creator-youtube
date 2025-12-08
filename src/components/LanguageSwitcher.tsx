'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Locale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLocale('en')}
        className={`!px-3 !py-1 rounded text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-[#8B9FFF] text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('es')}
        className={`!px-3 !py-1 rounded text-sm font-medium transition-colors ${
          locale === 'es'
            ? 'bg-[#8B9FFF] text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        ES
      </button>
    </div>
  );
}

