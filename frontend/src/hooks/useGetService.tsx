import { useEffect, useState } from "react"
import { Data as statioStatusData } from 'gbfs-typescript-types/v3.0/station_status'

const useGetService = (fetchService: () => Promise<statioStatusData | undefined>) => {
    const [items, setItems] = useState<statioStatusData | Array<any>>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getStations = async () => {
            setLoading(true)
            try {
                const data = await fetchService();
                if (data) {
                    setItems(data)
                }
            } catch (e) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getStations()
    }, [])

    return {
        items,
        loading,
        error
    }
}

export default useGetService