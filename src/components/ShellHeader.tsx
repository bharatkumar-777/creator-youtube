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
          width={50}
          height={50}
          priority
        />
        <span className="text-2xl font-bold text-gray-900">YouCreator</span>
      </Link>
      <nav className="flex items-center gap-6">
        <div className='bg-light-white flex items-center !gap-[18px] rounded-lg !p-4 !py-2'>
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
       
        </div>
       
        <LanguageSwitcher />
        <div className='bg-light-white flex items-center !gap-4 rounded-lg !p-4 !py-2'>
        <Link href="#login" className="text-gray-900 font-medium hover:underline">
          {t.header.login}
        </Link>
        <Link
          href="#signup"
          className="!px-4 py-2 bg-[#FC0A32]  text-white rounded-lg font-medium hover:bg-[#EE5454] transition-colors"
        >
          {t.header.signup}
        </Link>
        </div>
       
      </nav>
    </header>
  );
}

