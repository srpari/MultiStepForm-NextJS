import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Animator from './Animator';


import { motion } from 'framer-motion'; 

import { useSignupForm } from '../components/context/SignupFormContext';

function social(params) {

    const router = useRouter();
  
    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const { social, setSocial } = useSignupForm();

    
  function onSubmit(data) {
    setSocial(data);
    router.push('/review');
  }

    return (
        <div className="signup-form" style={{ margin: '0 auto', maxWidth: 600 }}>
        {/* <Animator> */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
                
        <motion.h3 whileTap={{scale: 1.2, originY: 2, color: "#fff"}}>
        How can we find you on social?
        </motion.h3>

        <motion.div 
           animate={{ x: 0, scale: 1, opacity: 0.8 }}
           initial={{ x: 200, scale: 0.8, opacity: 0 }}
           transition={{duration: 1, delay: 0.2}} >
        <input
          type="text"
          name="twitter"
          placeholder="What's your Twitter?"
          defaultValue={social.twitter}
          {...register("twitter",{ required: true })}
        /> </motion.div> 
        <p>{errors.twitter && 'Twitter is required.'}</p>
        
        <motion.div 
           animate={{ x: 0, scale: 1, opacity: 0.8 }}
           initial={{ x: -200, scale: 0.8, opacity: 0 }}
           transition={{duration: 1, delay: 0.2}} >
        <input
          type="text"
          name="facebook"
          placeholder="What's your Facebook?"
          defaultValue={social.facebook}
          {...register("facebook",{
            required: true,
          })}
        /></motion.div> 
        <p>{errors.facebook && 'Facebook is required.'}</p>

        <motion.div 
           animate={{ x: 0, scale: 1, opacity: 0.8 }}
           initial={{ x: 200, scale: 0.8, opacity: 0 }}
           transition={{duration: 1, delay: 0.2}} >
          <input type="submit" value="Next" />
        </motion.div>

      </form>
    {/* </Animator> */}
    </div>
    )
}

export default social;