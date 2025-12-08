'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ToolOptionsDropdownProps {
  isOpen: boolean;
  color: string;
  options?: string[];
}

export default function ToolOptionsDropdown({
  isOpen,
  color,
  options = [],
}: ToolOptionsDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="overflow-hidden"
        >
          <div className="space-y-2">
            {options.length > 0 ? (
              options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                  }}
                  whileHover={{
                    scale: 1.02,
                    x: 4,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-3 rounded-lg font-medium transition-all"
                  style={{
                    backgroundColor: `${color}20`,
                    border: `1px solid ${color}40`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${color}40`;
                  }}
                  // onMouseLeave={(e) => {
                  //   e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                  // }}
                >
                  {option}
                </motion.button>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-500 italic p-3"
              >
                Options will be available here
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

