'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ToolOptionsDropdown from './ToolOptionsDropdown';

interface ToolTabExpandedProps {
  isExpanded: boolean;
  color: string;
  children?: React.ReactNode;
  options?: string[];
}

export default function ToolTabExpanded({
  isExpanded,
  color,
  children,
  options,
}: ToolTabExpandedProps) {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          exit={{ opacity: 0, height: 0, y: -10 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="overflow-hidden mt-4"
        >
          <motion.div
            className="rounded-2xl p-6 min-h-[200px]"
            style={{
              border: `2px solid ${color}`,
              // backgroundColor: `${color}20`,
            }}
            initial={{ scale: 0.95, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.4,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
          >
            {children || (
              <div className="flex flex-col gap-4">
                <ToolOptionsDropdown
                  isOpen={true}
                  color={color}
                  options={options}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

