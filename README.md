# FLITTER
Link: [Flitter design doc](https://github.com/No-Woman-No-Work/flitter/blob/main/README.md)

Backend: [Flitter backend](https://github.com/No-Woman-No-Work/v1-Flitter-Back-)

Author(s): Andrea Ares Fernandez, Emma Alonso McCoy, Nelanyi Ruiz Contreras, Silvia Pescador López, Mariana Antoniol.

Status: [Draft]

Ultima actualización: 01/02/2023

## Contenido
- Downloading
- Installation
- Goals
- Background
- Design and Architecture
  - Solucion 1
    - Frontend
    - Backend
  - Solucion 2
    - Frontend
    - Backend
- Consideraciones
- Métricas

## Downloading
Flitter actualmente está alojado en GitHub. El frontend del proyecto se puede encontrar en [este enlace](https://github.com/No-Woman-No-Work/flitter), y el backend en [este enlace](https://github.com/No-Woman-No-Work/v1-Flitter-Back-)

Si deseas seguir el desarrollo de Flitter, puedes descargar el código fuente a través de Git clone.

```
git clone + enlace del proyecto
```

## Installation

Project setup
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Lints and fixes files
```
npm run lint
```

Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Objetivo
Proyecto final del Bootcamp Mujeres en Tech.

El objetivo de este proyecto es poner en práctica todos los conocimientos adquiridos, simulando una situación real: desarrollo de un proyecto utilizando iteraciones, tomando decisiones de arquitectura y con una fecha límite de entrega, por ello hemos tomado la decisión de desarrollar Flitter.

_Flitter será una plataforma que permita la publicación de mini contenidos._

## Goals
- Ofrecer un proceso de registro en el sistema amigable, que permita realizar funciones como miembro de la plataforma indicando nombre de
usuario, dirección de e-mail y contraseña de acceso.

![input](https://user-images.githubusercontent.com/50715363/215982356-72e9a497-cc91-4109-97d7-595d5b2a9f19.png)

- Permitir hacer login en la plataforma para acceder a la zona privada y así poder acceder a todas las funcionalidades de la misma.

![input](https://user-images.githubusercontent.com/50715363/215983030-9a6ed6fd-03b7-47e8-82d6-545bbcdab9a0.png)

- Crear publicaciones a través de un formulario fácil de usar donde sea posible rellenar todos los campos que forman una publicación.

![input](https://user-images.githubusercontent.com/50715363/216117628-caad82ab-c973-4f93-89fa-94ebc7c9faa5.png)

- Acceder a un listado de últimas publicaciones de manera rápida, con dos vistas posibles: Pública y Privada. Esto dependerá de la opción de seguir a usuarios para acceder a sus publicaciones en un feed personalizado.

![input](https://user-images.githubusercontent.com/50715363/216122456-a706d9cc-5c74-4b36-ab57-6801f8742725.png)

## Background
Es un buen momento para crear una plataforma alternativa a Twitter debido a la situación que atraviesa dicha plataforma, y asimismo consideramos que se trata de un proyecto ideal para potenciar nuestros conocimientos tanto de backend, como de frontend, para cubrir las necesidades y aportar valor.

## Design and Architecture
Flitter es una aplicación web desarrollada con un stack tecnológico de vanguardia. Se compone de un backend construido con Node.js, Express y MongoDB, y un frontend desarrollado con Javascript y el framework Vue 3.

El frontend de Flitter está construido con Vue Composition API y estilado con Bootstrap. La conexión con el backend se realiza a través de Axios, y se ha utilizado Vuex como manejador de estados. Además, se han implementado adaptaciones (transpiladores) a motores más antiguos de Javascript, como Babel y Webpack, para asegurar la compatibilidad con todos los navegadores.

El backend de Flitter utiliza Mongoose para conectarse a la base de datos noSQL MongoDB, y cuenta con un sistema de autenticación basado en Json Web Token y un sistema de mailing implementado con MailJet. Además, se han utilizado herramientas de pruebas internas de desarrollo, como Postman, para garantizar la calidad y estabilidad de la aplicación.

En resumen, Flitter es una aplicación web potente y versátil, construida con las tecnologías más modernas y adaptada para funcionar en todos los dispositivos con diseño responsive.

![input](https://user-images.githubusercontent.com/50715363/218560841-5ae5c39a-f3d8-4b0e-aab0-e9fe8a2cf7b6.png)

## Solution 1
### Frontend
_Frontend…_
### Backend
_Backend…_

## Solution 2
### Frontend
_Frontend…_
### Backend
_Backend…_

## Consideraciones
_Preocupaciones / trade-offs / tech debt_

## Métricas
_Que información necesitas para validar antes de lanzar este feature?_
