
import React from 'react';
import { Sparkles } from 'lucide-react';

const PreviewBanner = () => {
  return (
    <div className="bg-stone-900 text-white py-2.5 px-4 text-center text-sm flex items-center justify-center gap-2 flex-wrap">
      <Sparkles size={14} className="text-salmon-400" />
      <span className="text-stone-300">This is a preview of your InstaSite</span>
      <span className="text-stone-500">|</span>
      <a
        href="https://dfbdigital.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-salmon-400 hover:text-salmon-300 transition-colors"
      >
        Get Your InstaSite &rarr;
      </a>
    </div>
  );
};

export default PreviewBanner;
