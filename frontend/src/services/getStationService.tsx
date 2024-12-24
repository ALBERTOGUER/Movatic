import { StationStatus } from 'gbfs-typescript-types/v3.0';
import { Data as statioStatusData } from 'gbfs-typescript-types/v3.0/station_status'


const fetchStations = async () => {
    try {
        let stationStatusData: statioStatusData;
        const stationStatusResponse = await fetch("http://localhost:5000/api/stations")
        const stationStatusJson: StationStatus = await stationStatusResponse.json()
        stationStatusData = stationStatusJson.data;

        return stationStatusData
    } catch (error) {
        console.log(error)
    }
}

export default fetchStations;