from flask import Flask
from dotenv import load_dotenv


#Vamos a crear un metodo que inicializara la app y todos los modulos
def create_app():
    #inicio Flask
    app = Flask(__name__)
    
    #variables de entono
    load_dotenv()
    #
    #Aca iniciaremos los demas modulos de la app
    #
    
    #Por ultimo retornamos la aplicacion iniializada
    return app