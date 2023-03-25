#Importar funcion que crea la app
from main import create_app
import os


#LLamada a la funcion que retorna la app
app = create_app()

#Hay que hacer push del contexto de la app
#Permite no tener que pasar la variable app de arhivo en arhivo
#De esta manera no vamos a tener importaciones reursivas

app.app_context().push()

if __name__ == '__main__': 
    app.run(debug=True,port=os.getenv('PORT'))