import Button from '../components/common/Button';

import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

import Animator from './Animator';
import { motion, AnimatePresence } from 'framer-motion'; 


import { useSignupForm } from '../components/context/SignupFormContext';

const App = () => {
  
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors }} = useForm();
  
  const { profile, setProfile } = useSignupForm();

  
  const isProfileDone = !isEmpty(profile);


  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
 
  function onSubmit(data) {
    setProfile(data);
    router.push('/social');
  }

  return (
      <div className="signup-form" style={{ margin: '0 auto', maxWidth: 600 }}>

      
        {/* <Animator> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <AnimatePresence> */}

          <motion.h3 whileTap={{scale: 1.2, originY: 2, color: "#fff"}}>Personal Data</motion.h3>
          {/* </AnimatePresence> */}
          
          <motion.div 
           animate={{ x: 0, scale: 1, opacity: 0.8 }}
           initial={{ x: 200, scale: 0.8, opacity: 0 }}
           transition={{duration: 1, delay: 0.2}} >
            <input
            type="text"
            name="name"
            placeholder="What's your name?"
            defaultValue={profile.name}
            {...register('name', { required: true })} 
          />
          </motion.div> 
        
        <p>{errors.name && 'Name is required.'}</p>

        <motion.div 
           animate={{ x: 0, scale: 1, opacity: 0.8 }}
           initial={{ x: -200, scale: 0.8, opacity: 0 }}
           transition={{duration: 1, delay: 0.2}} >
           <input
              type="email"
              name="email"
              placeholder="What's your email?"
              defaultValue={profile.email}
              {...register('email', {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </motion.div> 
        
        <p>{errors.email && 'A valid email is required.'}</p>

        <motion.div 
           animate={{ x: 0, scale: 1, opacity: 0.8 }}
           initial={{ x: 200, scale: 0.8, opacity: 0 }}
           transition={{duration: 1, delay: 0.2}} >
          <input type="submit" value="Next" />
        </motion.div>
        
      </form>
    {/* </Animator> */}
      </div>
  );
};

export default App;
