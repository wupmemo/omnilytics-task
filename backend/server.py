from flask import Flask, request, jsonify
import random

app = Flask(__name__)

# Routes
@app.route("/", methods=["POST", "GET"])
def index():
    # default Route
    val = random.random()
    response = {
        "val": val,
    }
    # return name and email as a JSON httpresponse using jsonify
    return jsonify(response)
# When run from command line, start the server.
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')