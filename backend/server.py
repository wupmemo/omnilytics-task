from flask import Flask, request, jsonify
import random
import string

app = Flask(__name__)

# Routes
@app.route("/", methods=["POST", "GET"])
def get_random_string():

    # With combination of lower and upper case
    result_str = ''.join(random.choice(string.ascii_letters + string.digits) for i in range(15))

    # default Route
    response = {
        "string": result_str,
    }
    # print random string
    return jsonify(response)

# When run from command line, start the server.
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')