from flask import Flask, url_for
#here we are importing flask to create our server
# after the coma we are importing url_for, this function we use to build internal urls

from transactions import Transaction

newTransaction = Transaction("Santander", "Itau")

print(newTransaction.bank1)
print(newTransaction.bank2)


app = Flask(__name__)
# this way we can inicialize flask
# __name__ is just for flask to recognize and organize all the resources in our web application 


# this line we are creating a route to receive requests
@app.route("/")
def hello():
  return "world!"

@app.route("/transaction")
def transaction():
  return "transaction successfully"


# this line is to execute the server
app.run(debug=True)