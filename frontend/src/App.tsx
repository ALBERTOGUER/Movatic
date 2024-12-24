import fetchStations from './services/getStationService'
import useGetService from './hooks/useGetService'
import { Station, Data as stationStatusData } from 'gbfs-typescript-types/v3.0/station_status'
import { useContext } from 'react'
import { StationsContext } from './context/stationsContext/stationsContext'
import { Spinner } from './components/common/Spinner'
import './App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'


function App() {
  const [stations, setStations] = useState<Station[]>([])
  const [search, setSearch] = useState<string>("")
  const { items, loading, error }: { items: stationStatusData | Array<any>, loading: Boolean, error: Boolean } = useGetService(fetchStations)
  const { updateStations } = useContext(StationsContext)
  const navigate = useNavigate();

  useEffect(() => {
    setStations(items.stations)
    updateStations(items.stations)
  }, [items.stations])

  useEffect(() => {
    if (search !== "") {
      setStations(() => items.stations)
      setStations((prev) => {
        let newState = [...prev];
        newState = newState.filter((item) => item.station_id.includes(search))
        return newState
      })
    }
  }, [search])

  if (error) console.log(error)
  if (loading) return <Spinner />




  return (
    <div className=' mt-20 flex justify-center align-middle w-screen h-screen'>

      <div className=" relative flex flex-col w-4/6 h-3/4 overflow-hidden text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <div className="ml-3 mt-3">
          <div className="w-full max-w-sm min-w-[200px] relative">
            <div className="relative">
              <input
                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search for id..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <span
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-slate-600">
                  <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className='overflow-scroll'>
          <table className="w-full text-left table-auto min-w-max mt-2">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Station id
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Bikes available
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                stations?.map((station: Station) => (
                  <tr className="hover:cursor-pointer" key={station.station_id} onClick={() => navigate(`/details/${station.station_id}`)}>
                    <td className="p-4 border-b border-slate-200 hover:font-bold">
                      <p className="block text-sm text-slate-800">
                        {station.station_id}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {station.num_bikes_available}
                      </p>
                    </td>

                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default App
