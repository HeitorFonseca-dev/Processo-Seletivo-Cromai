from flask import Flask, jsonify
from math import hypot

app = Flask(__name__)

@app.get('/hipotenusa/<float:cateto_adjacente>/<float:cateto_oposto>/<float:hipotenusa>/')
def hipotenusa(cateto_adjacente, cateto_oposto, hipotenusa):
    response = jsonify(float(hypot(cateto_adjacente, cateto_oposto, hipotenusa)))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
