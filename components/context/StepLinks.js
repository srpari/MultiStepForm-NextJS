import  Link  from 'next/link';

import { useSignupForm } from './SignupFormContext';

import { motion } from 'framer-motion'; 

export  function StepLinks(params) {
  const { profile, social, confirm } = useSignupForm();

  const isProfileDone = !isEmpty(profile);
  const isSocialDone = !isEmpty(social);
  const isConfirm = !isEmpty(confirm);

  
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

  return (
    <div className="step-links">

        <motion.div 
           animate={{ x: 0, scale: 1, opacity: 0.8 }}
           initial={{ x: -300, scale: 0.8, opacity: 0 }}
           transition={{duration: 1, delay: 0.2}} >
          <Link href="/">
          <a> {isProfileDone ? '➊' : '➀'} Profile </a>
          </Link>
        </motion.div>

        
          <Link href="/">
            {isProfileDone ? (
              <motion.div 
              animate={{ x: 0, scale: 1, opacity: 0.8 }}
              initial={{ x: -300, scale: 0.8, opacity: 0 }}
              transition={{duration: 1, delay: 0.2}} >
                <Link href="/social">
                  <a>{isSocialDone ? '➋' : '➁'} Social </a>  
                </Link>
             </motion.div>
              ) : (
                <a >
                 ➁ Social 
                </a>
              )}
          </Link>
     

      

{/* ➂ ➌ */}

      {isProfileDone && isSocialDone ? (
         <motion.div 
         animate={{ x: 0, scale: 1, opacity: 0.8 }}
         initial={{ x: -300, scale: 0.8, opacity: 0 }}
         transition={{duration: 1, delay: 0.2}} >
        <Link href="/review">
         <a>{isConfirm ? '➌' : '➂' } Review</a>  
        </Link>
             </motion.div>
      ) : (
        <a>
          ➂ Review 
        </a>
      )}
    </div>
  );
}

