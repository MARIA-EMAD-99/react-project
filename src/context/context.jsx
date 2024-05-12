
// LanguageContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

 export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
  };

 

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
  


LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};




