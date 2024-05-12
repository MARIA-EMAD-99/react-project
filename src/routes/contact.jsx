
// Contact.js
import { useContext } from 'react';
import { LanguageContext } from '../context/context';

const Contact = () => {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  // Set direction based on the language
  const direction = lang === 'en' ? 'ltr' : 'rtl';

  return (
    <nav style={{ direction: direction }}>
      
        
          <button className='btn btn-danger' onClick={toggleLanguage}>{lang === 'en' ? 'عربي' : 'English'}</button>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorum eum eos voluptate consequatur inventore. Omnis aperiam, quo molestiae itaque veritatis labore, repudiandae, distinctio eaque at deserunt iusto voluptate velit?</p>
       
    
    </nav>
  );
};

export default Contact;

