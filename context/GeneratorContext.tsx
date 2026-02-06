
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
    if (fields.photoFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setData({
          name: fields.name,
          photoUrl: reader.result as string,
          profession: fields.profession,
          practiceName: fields.practiceName,
          phone: fields.phone,
          city: fields.city,
          isSubmitted: true,
        });
      };
      reader.readAsDataURL(fields.photoFile);
    } else {
      setData({
        name: fields.name,
        photoUrl: null,
        profession: fields.profession,
        practiceName: fields.practiceName,
        phone: fields.phone,
        city: fields.city,
        isSubmitted: true,
      });
    }
  }, []);

  const resetForm = useCallback(() => {
    setData({ name: '', photoUrl: null, profession: '', practiceName: '', phone: '', city: '', isSubmitted: false });
  }, []);

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
