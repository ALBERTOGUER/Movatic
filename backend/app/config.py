import os

class Config:
    DEBUG = True
    EXTERNAL_API_URL = os.getenv("EXTERNAL_API_URL", "https://gbfs.bcycle.com/bcycle_madison/gbfs.json")