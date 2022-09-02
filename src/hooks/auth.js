import { createContext, useContext } from 'react'

/** Store */
const initilaState = { auth : false};

const authContext = createContext(initilaState);

/**     Auth Provider */
export function AuthProvider({ children }){
    return <authContext.Provider value={initilaState}>{children}</authContext.Provider>
}

/** Own Auth Consumer Hook */
export default function AuthConsumer(){
    return useContext(authContext)
}
