
import React from 'react';
import { Globe, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string | null;
  onLanguageChange: (language: string | null) => void;
  className?: string;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({ 
  languages, 
  selectedLanguage, 
  onLanguageChange,
  className 
}) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <button
        onClick={() => onLanguageChange(null)}
        className={cn(
          "flex items-center px-3 py-1.5 rounded-full border transition-all",
          selectedLanguage === null 
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-background hover:bg-secondary/50 border-border"
        )}
      >
        <Globe className="w-3.5 h-3.5 mr-1.5" />
        <span className="text-sm font-medium">All</span>
      </button>
      
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => onLanguageChange(language)}
          className={cn(
            "flex items-center px-3 py-1.5 rounded-full border transition-all",
            selectedLanguage === language 
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background hover:bg-secondary/50 border-border"
          )}
        >
          {selectedLanguage === language && <Check className="w-3.5 h-3.5 mr-1.5" />}
          <span className="text-sm font-medium">{language}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageFilter;
