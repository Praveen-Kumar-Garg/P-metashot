// Footer.tsx
import React from 'react';
import { LinkedinIcon } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  email?: string;
  linkedinUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Metashot Technologies",
  email = "info@metashot.org",
  linkedinUrl = "https://linkedin.com"
}) => {
  return (
    <footer className="w-full bg-black text-white py-2 px-4 flex justify-between items-center fixed bottom-0">
      <div className="flex items-center space-x-2">
        <span className="text-emerald-400 text-xl">⬡</span>
        <span className="text-sm text-gray-300">A Product of {companyName}</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-300">Reach out to us - </span>
        <a 
          href={`mailto:${email}`}
          className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
        >
          {email}
        </a>
        <a 
          href={linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
        >
          <LinkedinIcon size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;