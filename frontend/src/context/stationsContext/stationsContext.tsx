import React, { createContext, useState, ReactNode } from 'react'
import { Station } from 'gbfs-typescript-types/v3.0/station_status'

interface ContextInteface {
    stations: Station[],
    updateStations: (stationsParam: Station[]) => void
}

const defaultValue = {
    stations: [],
    updateStations: () => { },
}

const StationsContext = createContext<ContextInteface>(defaultValue)


interface ContextProviderProps {
    children: ReactNode
}

const Provider: React.FC<ContextProviderProps> = ({ children }) => {
    const [stations, setStations] = useState<Station[]>([])

    const updateStations = (stationsParam: Station[]) => {
        setStations(stationsParam)
    }

    return (
        <StationsContext.Provider value={{ stations, updateStations }}>
            {children}
        </StationsContext.Provider>
    )
}

export { Provider, StationsContext }
