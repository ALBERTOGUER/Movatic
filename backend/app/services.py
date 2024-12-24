import requests

API_URL = "https://gbfs.bcycle.com/bcycle_madison/station_status.json"

def fetch_station_data():
    try:
        # SSL verification disabled (just in development not in production)
        response = requests.get(API_URL, verify=False)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from externalAPI:{e}")
        return None