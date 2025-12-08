"use client";

import { useDropzone } from "@/hooks/useDropzone";
import { useLanguage } from "@/context/LanguageContext";
import { useCallback, useState } from "react";
import Image from "next/image";

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
      className={`w-full bg-white rounded-[60px] border-3 border-solid border-black !p-6 text-center relative transition-all  ${
        isDragging ? "border-[#8B9FFF] bg-[#8B9FFF]/5" : "border-black"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDropEvent}
    >
      <div className="border-dashed border-2 !py-12 border-gray-300 rounded-[60px]">
        <div className="text-xs text-gray-400 !mt-2 mb-4">
          {t.dropzone.maxSize}
        </div>

        <div className="flex flex-col items-center justify-center min-h-[300px]">
          {/* Upload Icon */}
          <div className="relative">
            <div className="w-32 h-32 z-10 relative  rounded-full  flex items-center justify-center mb-2">
              <Image
                src="/assets/uploadIcon.svg"
                alt="YouCreator Logo"
                width={150}
                height={150}
                priority
              />
            </div>
            <div className="w-24 h-24 absolute top-0 left-0 rounded-full bg-accent-yellow flex items-center justify-center "></div>

            <div className="absolute top-7 -right-2 w-24 h-24 rounded-full bg-[#8B9FFF] "></div>
            <div className="absolute -bottom-2 -left-4 w-20 h-20 rounded-full bg-[#25D366] "></div>
          </div>

          <div className="space-y-2 !mb-6 !mt-8 !font-sans">
            <p className="text-xl font-black text-gray-900">
              {t.dropzone.selectTool}
            </p>
            <p className="text-xl font-bold !font-sans">
              <span className="font-bold uppercase">
                {" " + t.dropzone.then + " "}
              </span>
              <span className="font-bold text-[#FC0A32]">
                {t.dropzone.dragDropHighlight}
              </span>{" "}
              OR{" "}
              <span className="font-bold underline text-[#25D366]">
                {t.dropzone.browseFiles}
              </span>
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
          {/* <label
          htmlFor="file-upload"
          className="cursor-pointer px-6 py-3 bg-[#8B9FFF] text-white rounded-lg font-medium hover:bg-[#7A8EFF] transition-colors inline-block"
        >
          {t.dropzone.browseFiles}
        </label> */}

          <p className="text-xs text-gray-400 mt-6 !mb-2">
            {t.dropzone.supports}
          </p>

          {/* File type icons */}
          <div className="flex gap-2 mt-4 opacity-50">
            {["📹", "🎵", "📄", "🖼️"].map((icon, i) => (
              <span key={i} className="text-xs">
                {icon} {i !== 3 ? "+" : ""}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
