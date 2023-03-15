
#Importo Flask
from flask import Flask

#Importar libreria os
import os

#Importar dotenv 
from dotenv import load_dotenv

#Cargo las variables de entorno
load_dotenv()
# Creo una instancia de la aplicacion de la calse Flask
#paso por parametro __name__ por defecto como nombre de la palicacion
app = Flask(__name__)

#Para deciler a Flask que arranque la aplicacion
if __name__ == '__main__': #Este if sirve para decirle a Python que al ejecutarce el script
    app.run()
    #app.run(port=8000)
    #app.run(debug=True,port=os.getenv('PORT'))