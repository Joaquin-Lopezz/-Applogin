# Proyecto de Login con Node.js

Este proyecto implementa un sistema de login utilizando Node.js y varias dependencias populares de npm. Los usuarios pueden autenticarse utilizando sus credenciales locales o mediante la autenticación OAuth a través de GitHub.

## Dependencias

- **bcrypt** (v5.1.1): Librería para el hash de contraseñas.
- **connect-mongo** (v5.1.0): Middleware para conectar Express.js a MongoDB para almacenar sesiones.
- **express** (v4.18.2): Framework web para Node.js.
- **express-handlebars** (v7.1.2): Motor de plantillas para Express.js.
- **mongoose** (v8.0.3): ODM (Object-Document Mapper) para MongoDB.
- **passport** (v0.7.0): Middleware de autenticación para Node.js.
- **passport-github2** (v0.1.12): Estrategia Passport para autenticación OAuth con GitHub.
- **passport-local** (v1.0.0): Estrategia Passport para autenticación local basada en usuario y contraseña.
- **session** (v0.1.0): Middleware de sesión para Express.js.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el comando `npm install` para instalar todas las dependencias.

## Configuración


- `MONGODB_URI`: La URI de conexión a tu base de datos MongoDB.
- `SESSION_SECRET`: Una clave secreta para firmar las cookies de sesión.
- `GITHUB_CLIENT_ID`: El ID de cliente de tu aplicación GitHub OAuth.
- `GITHUB_CLIENT_SECRET`: El secreto de cliente de tu aplicación GitHub OAuth.

## Ejecución

Desde la terminal entra en la carpeta 📂  "src" y ejecuta el comando "npm run dev".  
Prodras acceder a la aplicacion web que se encuentra en la http://localhost:8080/)http://localhost:8080/ por defecto
