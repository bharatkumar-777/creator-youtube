'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function ShellHeader() {
  const { t } = useLanguage();

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/logo.svg"
          alt="YouCreator Logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-xl font-semibold text-gray-900">YouCreator</span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="#pricing"
          className="text-[#FC0A32] font-medium hover:underline"
        >
          {t.header.pricing}
        </Link>
        <Link href="#about" className="text-gray-900 font-medium hover:underline">
          {t.header.about}
        </Link>
        <Link href="#help" className="text-gray-900 font-medium hover:underline">
          {t.header.help}
        </Link>
        <Link href="#login" className="text-gray-900 font-medium hover:underline">
          {t.header.login}
        </Link>
        <LanguageSwitcher />
        <Link
          href="#signup"
          className="px-4 py-2 bg-[#FC0A32] text-white rounded-lg font-medium hover:bg-[#EE5454] transition-colors"
        >
          {t.header.signup}
        </Link>
      </nav>
    </header>
  );
}

