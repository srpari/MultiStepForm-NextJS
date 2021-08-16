import React, { createContext, useContext, useState } from 'react';

export const SignupFormContext = createContext();
export const useSignupForm = () => useContext(SignupFormContext);

export function SignupFormProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [social, setSocial] = useState({});
  
  const [confirm,setConfirm] = useState({});    

  return (
    <SignupFormContext.Provider
      value={{ profile, setProfile, social, setSocial,confirm,setConfirm }}
    >
      {children}
    </SignupFormContext.Provider>
  );
}
