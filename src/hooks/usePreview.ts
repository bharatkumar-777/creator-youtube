import { useState, useEffect } from 'react';

export function usePreview(file: File | null) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    setLoading(true);
    setError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      setLoading(false);
    };
    reader.onerror = () => {
      setError('Failed to load preview');
      setLoading(false);
    };

    if (file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    } else if (file.type.startsWith('video/')) {
      reader.readAsDataURL(file);
    } else {
      setError('Preview not available for this file type');
      setLoading(false);
    }

    return () => {
      reader.abort();
    };
  }, [file]);

  return { preview, loading, error };
}

