
import React, { createContext, useContext, useState, useCallback } from 'react';

interface GeneratorData {
  name: string;
  photoUrl: string | null;
  profession: string;
  practiceName: string;
  phone: string;
  city: string;
  isSubmitted: boolean;
}

interface SubmitFields {
  name: string;
  photoFile: File | null;
  profession: string;
  practiceName: string;
  phone: string;
  city: string;
}

interface GeneratorContextType {
  data: GeneratorData;
  submitForm: (fields: SubmitFields) => void;
  resetForm: () => void;
}

const GeneratorContext = createContext<GeneratorContextType | null>(null);

export const GeneratorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<GeneratorData>({
    name: '',
    photoUrl: null,
    profession: '',
    practiceName: '',
    phone: '',
    city: '',
    isSubmitted: false,
  });

  const submitForm = useCallback((fields: SubmitFields) => {
    const photoUrl = fields.photoFile ? URL.createObjectURL(fields.photoFile) : null;
    setData({
      name: fields.name,
      photoUrl,
      profession: fields.profession,
      practiceName: fields.practiceName,
      phone: fields.phone,
      city: fields.city,
      isSubmitted: true,
    });
  }, []);

  const resetForm = useCallback(() => {
    if (data.photoUrl) {
      URL.revokeObjectURL(data.photoUrl);
    }
    setData({ name: '', photoUrl: null, profession: '', practiceName: '', phone: '', city: '', isSubmitted: false });
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
