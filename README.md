# Igloobal Test Frontend (React Native)
Este repositorio contiene el frontend de la aplicación móvil para la gestión de productos farmacéuticos, desarrollado con React Native y TypeScript. La aplicación ofrece una interfaz intuitiva que permite visualizar productos en tarjetas (cards), eliminar productos mediante un modal de confirmación y agregar nuevos productos a través de un formulario.

# Requisitos Previos
1.  **Node.js**
Se recomienda descargar e instalar el SDK de Node.js desde la página oficial:
https://nodejs.org/en/download/
Se debe verificar la instalación mediante los comandos:

```bash
node -v
npm -v
```

2.  **React Native CLI y entorno de desarrollo**
Es necesario contar con un entorno de desarrollo configurado para React Native, lo que implica tener instalado Android Studio para compilar la aplicación en Android o Xcode para iOS. Además, se recomienda disponer de un emulador o dispositivo físico para realizar pruebas.

# Instalación del Proyecto
1.  Clonar el repositorio o descargar el contenido en formato ZIP y extraerlo en la máquina local:

```bash
git clone https://github.com/SneiderFuentes/igloobal-test-app.git
cd igloobal-test-app
```
2.  Instalar las dependencias del proyecto:

```bash
npm install
```

3.  Configurar las variables de entorno, si fuera necesario. Por ejemplo, la URL base para la comunicación con el backend puede definirse directamente en el archivo de servicios (service/api.ts). Por defecto, la aplicación asume que el backend se encuentra en http://localhost:3000/api.

## Ejecución en Modo Desarrollo
Para levantar la aplicación en modo desarrollo con recarga automática:

1.  En la terminal, situarse en la raíz del proyecto.

2.  Ejecutar:
```bash
npm start
```

Este comando iniciará el Metro Bundler y, posteriormente, se podrá compilar e instalar la aplicación en el emulador o dispositivo físico mediante:
```bash
npx react-native run-android
```

Se recomienda que el dispositivo o emulador esté configurado correctamente y que, en caso de usar Android, se tenga presente la dirección IP adecuada (por ejemplo, 10.0.2.2 en lugar de localhost, si se usa el emulador de Android).

## Notas Finales
- Se debe asegurar que el backend esté en ejecución y accesible desde la red, de manera que la aplicación móvil pueda consumir los endpoints API.
- La configuración de variables de entorno (por ejemplo, la URL base del API) debe ajustarse según el entorno de desarrollo o pruebas.
