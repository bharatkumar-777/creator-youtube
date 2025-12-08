import { useCallback } from 'react';
import { useDropzoneContext } from '@/context/DropzoneContext';

export function useDropzone() {
  const {
    files,
    selectedFile,
    uploadState,
    addFile,
    removeFile,
    selectFile,
    setUploadState,
  } = useDropzoneContext();

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        addFile(file);
      });
    },
    [addFile]
  );

  const handleRemove = useCallback(
    (id: string) => {
      removeFile(id);
    },
    [removeFile]
  );

  return {
    files,
    selectedFile,
    uploadState,
    handleDrop,
    handleRemove,
    selectFile,
    setUploadState,
  };
}

