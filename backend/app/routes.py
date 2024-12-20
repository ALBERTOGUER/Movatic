from flask import Blueprint, jsonify


api = Blueprint("api", __name__)

@api.route("/")
def get_stations():
    return "<p>Hello! fhjkff</p>"

def init_routes(app):
    app.register_blueprint(api, url_prefix="/api")