'use client';

import { useDropzone } from '@/hooks/useDropzone';
import { useLanguage } from '@/context/LanguageContext';
import { useCallback, useState } from 'react';

export default function DropzoneCard() {
  const { t } = useLanguage();
  const { handleDrop } = useDropzone();
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      handleDrop(acceptedFiles);
      setIsDragging(false);
    },
    [handleDrop]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleDrop(Array.from(e.target.files));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDropEvent = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      onDrop(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div
      className={`w-full bg-white rounded-2xl border-2 border-dashed p-12 text-center relative transition-all ${
        isDragging
          ? 'border-[#8B9FFF] bg-[#8B9FFF]/5'
          : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDropEvent}
    >
      <div className="text-xs text-gray-400 mb-4">
        {t.dropzone.maxSize}
      </div>

      <div className="flex flex-col items-center justify-center min-h-[300px]">
        {/* Upload Icon */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-[#FFC510] flex items-center justify-center mb-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V20M4 12H20"
                stroke="#8B9FFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-[#8B9FFF] opacity-80"></div>
          <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-[#25D366] opacity-80"></div>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-lg font-bold text-gray-900">
            {t.dropzone.selectTool}
          </p>
          <p className="text-base">
            <span className="font-bold text-[#FC0A32]">{t.dropzone.dragDropHighlight}</span>
            {' '}OR{' '}
            <span className="font-bold text-[#25D366]">{t.dropzone.browseFiles}</span>
          </p>
        </div>

        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileInput}
          accept="video/*,audio/*,.srt,.txt,.jpg,.jpeg,.png"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer px-6 py-3 bg-[#8B9FFF] text-white rounded-lg font-medium hover:bg-[#7A8EFF] transition-colors inline-block"
        >
          {t.dropzone.browseFiles}
        </label>

        <p className="text-xs text-gray-400 mt-6">
          {t.dropzone.supports}
        </p>

        {/* File type icons */}
        <div className="flex gap-2 mt-4">
          {['📹', '🎵', '📄', '🖼️'].map((icon, i) => (
            <span key={i} className="text-2xl">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

