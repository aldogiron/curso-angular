# Curso Angular
Material, lecciones, ejercicios, demos del curso de Angular.

## Prerequisitos

* [DotNetCore SDK](https://dotnet.github.io/)
* [NodeJs](https://nodejs.org/)
  * [Angular Cli](https://cli.angular.io/)
* [Visual Studio Code](https://code.visualstudio.com/)
  * [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

## Clonar y ejecutar desde el repositorio existente

```bash
git clone https://github.com/miguelerm/curso-angular.git
```

Ejecutar el servidor de backend (se quedará escuchando en el puerto 5000):

```bash
cd curso-angular\src\backend
dotnet run  -p Backend.Api\
```


Ejecutar el servidor de frontend (se quedará escuchando en el puerto 4200):

```bash
cd curso-angular\src\frontend
npm run start
```

## Crear los proyectos desde cero

Creando el back-end:

```bash
# crear estructura de directorios
mkdir src
cd src
mkdir backend
cd backend

# crear solucion
dotnet new sln --name Backend

# crear proyecto
dotnet new webapi --name Backend.Api --output Backend.Api

# agregar proyecto a la solucion
dotnet sln add Backend.Api\Backend.Api.csproj

# agregar nuget packages al proyecto
dotnet add .\Backend.Api\Backend.Api.csproj package GlobalExceptionHandler
```

Creando el front-end

```bash
# acceder al directorio fuente
cd src

# crear la aplicación de angular
ng new frontend --directory frontend --routing true
```

