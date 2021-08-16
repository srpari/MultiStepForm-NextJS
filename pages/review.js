import React, { useState } from 'react';
import { Badge } from 'react-dom';
import Animator from './Animator';

import { motion } from 'framer-motion'; 

import { useSignupForm } from '../components/context/SignupFormContext';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';

function review(params) {

    const { profile, social, setConfirm} = useSignupForm();
    
//   const [confirm,setConfirm] = useState({});    
    
    const { register, handleSubmit, formState: { errors }} = useForm();

    function onSubmit(e) {
        // e.preventDefault();
      setConfirm(e);
      alert('Thanks you for submitting! congrats!');
    }

    return (
        <div className="signup-form" style={{ margin: '0 auto', maxWidth: 600 }}>

        {/* <Animator> */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* <h3>Review all your details</h3> */}

          
        <motion.h3 whileTap={{scale: 1.2, originY: 2, color: "#fff"}}>
        Review all your details
        </motion.h3>

           <motion.div
              style={{ position: 'relative' }}
              initial={{ x: 200, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 0.8 }}
              exit={{ x: -200, scale: 0.8, opacity: 0 }}  
              transition={{ ease: "easeOut", duration: 1 }}
            > 
          <p>
            <strong>Name</strong>: {profile.name}
          </p>
          <p>
            <strong>Email</strong>: {profile.email}
          </p>
          <p>
            <strong>Twitter</strong>: {social.twitter}
          </p>
          <p>
            <strong>Facebook</strong>: {social.facebook}
          </p>
          </motion.div> 
        <div className="checkbox-container">          
               <input type="checkbox" 
                {...register("confirm",{required: true, })} 
                value="confirm" name="confirm" />
              <label><strong>Confirm before submit</strong></label>       
        </div>          
  
        <p>{errors.confirm && 'Check is required.'}</p>

            <Button type="submit">Submit</Button>
        </form>
      {/* </Animator> */}
        </div>
    )
}

export default review;