Prueba Desarrollador Backend

Este proyecto es una prueba para desarrollador backend.

## Requerimientos

- NodeJS 18.6.0
- NPM 8.13.2
- MongoDB 4.4.9 o MongoDB Atlas

## Instalación

1. Clonar el repositorio
2. Crear una base de datos en MongoDB Atlas o localmente
3. Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

```
MONGO_URI= <URL de conexión a la base de datos>
MONGO_URI_TEST= <URL de conexión a la base de datos para pruebas>
BASE_URL= <URL base de la API>
SALT_ROUNDS= <Número de rondas para el algoritmo de encriptación>
JWT_SECRET= <Clave secreta para el algoritmo de encriptación>

```

4. Ejecutar el comando `npm install`


## Ejecución

1. Ejecutar el comando `npm run dev` para iniciar el servidor de desarrollo en modo watch con nodemon 
2. Ejecutar el comando `npm run test` para ejecutar las pruebas unitarias
3. Ejecutar el comando `npm run build` para compilar el proyecto
4. Ejecutar el comando `npm start` para iniciar el servidor de producción en javascript puro


## Documentación

1. Ejecutar el comando `npm run dev` y acceder a la ruta `/api-docs` para ver la documentación de la API


## Endpoints

- [POST] /signup - Crea un usuario en la base de datos y devuelve el email y la contraseña encriptada

- [POST] /login - Inicia sesión con un usuario y devuelve un token de autenticación

- [GET] /users - Devuelve todos los usuarios de la base de datos API REST tiene que estar autenticado para acceder a este endpoint
- [GET] /users/photos/:id - Devuelve las foto  de un usuario por su id

- [GET] /posts - Devuelve todos los posts de la base de datos API REST tiene que estar autenticado para acceder a este endpoint

- [POST] /register - Crea un registro en la base de datos segun la fecha actual y el tipo de solicitud
- [GET] /register - Devuelve todos los registros de la base de datos API REST tiene que estar autenticado para acceder a este endpoint
- [GET] /register/:id - Devuelve un registro de la base de datos por su id API REST tiene que estar autenticado para acceder a este endpoint
- [PUT] /register/:id - Actualiza un registro de la base de datos por su id API REST tiene que estar autenticado para acceder a este endpoint
- [DELETE] /register/:id - Elimina un registro de la base de datos por su id API REST tiene que estar autenticado para acceder a este endpoint

-[GET] /health - Devuelve el estado de la API



## License

The TypeScript library is licensed under the MIT license.

## Enlace API

https://ilineprueba.herokuapp.com/


## Security

If you discover any security related issues, please email [email protected] instead of using the issue tracker.


