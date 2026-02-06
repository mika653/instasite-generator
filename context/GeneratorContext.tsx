
import React, { createContext, useContext, useState, useCallback } from 'react';

interface GeneratorData {
  name: string;
  photoUrl: string | null;
  isSubmitted: boolean;
}

interface GeneratorContextType {
  data: GeneratorData;
  submitForm: (name: string, photoFile: File | null) => void;
  resetForm: () => void;
}

const GeneratorContext = createContext<GeneratorContextType | null>(null);

export const GeneratorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<GeneratorData>({
    name: '',
    photoUrl: null,
    isSubmitted: false,
  });

  const submitForm = useCallback((name: string, photoFile: File | null) => {
    const photoUrl = photoFile ? URL.createObjectURL(photoFile) : null;
    setData({ name, photoUrl, isSubmitted: true });
  }, []);

  const resetForm = useCallback(() => {
    if (data.photoUrl) {
      URL.revokeObjectURL(data.photoUrl);
    }
    setData({ name: '', photoUrl: null, isSubmitted: false });
  }, [data.photoUrl]);

  return (
    <GeneratorContext.Provider value={{ data, submitForm, resetForm }}>
      {children}
    </GeneratorContext.Provider>
  );
};

export const useGenerator = () => {
  const context = useContext(GeneratorContext);
  if (!context) {
    throw new Error('useGenerator must be used within a GeneratorProvider');
  }
  return context;
};
