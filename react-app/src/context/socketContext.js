import React from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

const SocketProvider = ({ children }) => {
<<<<<<< HEAD
    const ENDPOINT = 'localhost:5000';
=======
    const ENDPOINT = 'http://localhost:5000/';
>>>>>>> 2a8c1dff5fc7f743e6b8d9585e41df266bd50c72
    const socket = io(ENDPOINT, { transports: ['websocket', 'polling'] })
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketContext, SocketProvider }