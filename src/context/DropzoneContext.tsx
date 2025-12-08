'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FileData {
  file: File;
  id: string;
}

interface DropzoneContextType {
  files: FileData[];
  selectedFile: FileData | null;
  uploadState: 'idle' | 'uploading' | 'success' | 'error';
  addFile: (file: File) => void;
  removeFile: (id: string) => void;
  selectFile: (id: string) => void;
  setUploadState: (state: DropzoneContextType['uploadState']) => void;
}

const DropzoneContext = createContext<DropzoneContextType | undefined>(
  undefined
);

export function DropzoneProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<FileData[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [uploadState, setUploadState] = useState<
    'idle' | 'uploading' | 'success' | 'error'
  >('idle');

  const addFile = (file: File) => {
    const newFile: FileData = {
      file,
      id: Math.random().toString(36).substring(7),
    };
    setFiles((prev) => [...prev, newFile]);
    if (!selectedFile) {
      setSelectedFile(newFile);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    if (selectedFile?.id === id) {
      setSelectedFile(null);
    }
  };

  const selectFile = (id: string) => {
    const file = files.find((f) => f.id === id);
    setSelectedFile(file || null);
  };

  return (
    <DropzoneContext.Provider
      value={{
        files,
        selectedFile,
        uploadState,
        addFile,
        removeFile,
        selectFile,
        setUploadState,
      }}
    >
      {children}
    </DropzoneContext.Provider>
  );
}

export function useDropzoneContext() {
  const context = useContext(DropzoneContext);
  if (context === undefined) {
    throw new Error('useDropzoneContext must be used within a DropzoneProvider');
  }
  return context;
}

