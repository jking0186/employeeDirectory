import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();
export const AppProvider = props => {

    const [searching, setSearching] = useState("");
    
    useEffect(() => {

    }, [])

    return (
        <AppContext.Provider value={{
            search: [searching, setSearching],
        }}>
            {props.children}
        </AppContext.Provider>
    )
}