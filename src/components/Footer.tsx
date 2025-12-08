'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full px-6 py-4 text-left">
      <p className="text-xs text-gray-500">{t.footer.copyright}</p>
    </footer>
  );
}

