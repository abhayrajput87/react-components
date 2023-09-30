import { createContext, useEffect, useState } from "react";

const NavigationContext=createContext();

function NavigationProvider({children}){

    const[currentPath,updateCurrentPath] =useState(window.location.pathname)
    
    useEffect(()=>{
        const handle =()=>{
            updateCurrentPath(window.location.pathname);

        }
        
        
        window.addEventListener('popstate',handle);

        return ()=>{
            window.addEventListener('popstate',handle);

        }

    },[])

    const navigate=(to)=>{
        window.history.pushState({},'',to);
        updateCurrentPath(to);

    }


   
   return (<NavigationContext.Provider value={{navigate,currentPath}}>  
    {children}
    </NavigationContext.Provider>)

}



export {NavigationProvider};



export default NavigationContext;