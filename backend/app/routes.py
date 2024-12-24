from flask import Blueprint, jsonify
from app.services import fetch_station_data
from flask_cors import cross_origin

api = Blueprint("api", __name__)

@api.route("/")
@cross_origin()
def Hello():
    users = [{'id': 1, 'username': 'Alice'}, {'id': 2, 'username': 'Bob'}]
    return jsonify(users)

@api.route("/stations")
@cross_origin()
def get_stations():
    data = fetch_station_data()
    if data:
        return jsonify(data), 200
    return ({"error": "Failed to fetch data"}), 500

def init_routes(app):
    app.register_blueprint(api, url_prefix="/api")