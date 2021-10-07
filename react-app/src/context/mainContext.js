import React, { useState } from 'react'

const MainContext = React.createContext()

const MainProvider = ({ children }) => {
    const [username, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <MainContext.Provider value={{ username, room, setName, setRoom }}>
            {children}
        </MainContext.Provider>
    )
}

export { MainContext, MainProvider } 