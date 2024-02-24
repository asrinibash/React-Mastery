import React from 'react'
import userContext from './userContext'
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);      //Here we call the API and share when ever it requires..
                                                   ////We can Pass in the "value"
    return (
        <userContext.Provider value={{user,setUser}}>    
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;