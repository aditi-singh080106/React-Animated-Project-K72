import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

 export const NavbarContext = createContext();
 export const NavColorContext = createContext();

const Navcontext = ({children}) => {

 
  const [navOpen,setNavOpen]=useState(false);
  const [navcolor,setNavcolor]=useState('white');
  const locate = useLocation().pathname;
  useEffect(() => {
    if(locate == '/projects' || locate == '/agence'){
      setNavcolor('black');
    }
    else{
      setNavcolor('white');
    }
  },[locate])
  return (
    <div>
      <NavbarContext.Provider value={[navOpen,setNavOpen]}>
        <NavColorContext.Provider value={[navcolor,setNavcolor]}>
          {children}
        </NavColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default Navcontext
