# loginGithub-
Proyecto de Login con Node.js
Este es un proyecto de ejemplo que implementa un sistema de login utilizando Node.js y varias dependencias populares de npm. Con este sistema,
los usuarios pueden autenticarse utilizando sus credenciales locales o mediante la autenticación OAuth a través de GitHub.

Dependencias
Este proyecto utiliza las siguientes dependencias:

bcrypt (v5.1.1): Librería para el hash de contraseñas.
connect-mongo (v5.1.0): Middleware para conectar Express.js a MongoDB para almacenar sesiones.
express (v4.18.2): Framework web para Node.js.
express-handlebars (v7.1.2): Un motor de plantillas para Express.js.
mongoose (v8.0.3): ODM (Object-Document Mapper) para MongoDB.
passport (v0.7.0): Middleware de autenticación para Node.js.
passport-github2 (v0.1.12): Estrategia Passport para la autenticación OAuth con GitHub.
passport-local (v1.0.0): Estrategia Passport para la autenticación local basada en usuario y contraseña.
session (v0.1.0): Middleware de sesión para Express.js.


Ejecución
Una vez que hayas configurado las variables de entorno, pocicionate en la carpeta 📂 "src" en la consola y puedes ejecutar la aplicación utilizando el comando:
npm run dev
Esto iniciará el servidor y podrás acceder a la aplicación desde tu navegador visitando http://localhost:8080.
