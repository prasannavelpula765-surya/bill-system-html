from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Server-side temporary storage array
items = []

@app.route('/')
def home():
    # Renders the main entry page
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_item():
    item = request.form['item']
    price = float(request.form['price'])
    quantity = int(request.form['quantity'])
    items.append({"name": item, "price": price, "quantity": quantity})
    return "Item added successfully!"

@app.route('/bill')
def bill_page():
    # Renders the actual bill page template
    return render_template('biilsisply.html')

@app.route('/bill_json')
def bill_json():
    now = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
    response = {
        "dateTime": now,
        "items": items
    }
    return jsonify(response)

@app.route('/clear', methods=['POST'])
def clear_cart():
    global items
    items = []
    return "Cart cleared!"

if __name__ == '__main__':
    app.run(debug=True)
