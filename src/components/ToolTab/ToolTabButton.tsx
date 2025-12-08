'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface ToolTabButtonProps {
  nameKey: string;
  color: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ToolTabButton({
  nameKey,
  color,
  icon,
  isActive,
  onClick,
}: ToolTabButtonProps) {
  const { t } = useLanguage();

  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 !px-6 !py-[11px] rounded-2xl text-[14px] font-medium transition-all relative overflow-hidden ${
        isActive ? 'shadow-lg' : 'hover:shadow-md'
      }`}
      style={{
        backgroundColor: isActive ? 'transparent' : color,
        color: 'black',
        border: `2px solid ${isActive ? color : 'black'}`,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: isActive ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <Image
        src={icon}
        alt={nameKey}
        width={20}
        height={20}
        className="w-6 h-6"
      />
      <span>{t.tools[nameKey as keyof typeof t.tools]}</span>
    </motion.button>
  );
}

