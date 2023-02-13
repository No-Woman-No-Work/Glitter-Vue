# FLITTER
Link: [Flitter design doc](https://github.com/No-Woman-No-Work/flitter/blob/main/README.md)

Backend: [Flitter backend](https://github.com/No-Woman-No-Work/v1-Flitter-Back-)

Author(s): Andrea Ares Fernandez, Emma Alonso McCoy, Nelanyi Ruiz Contreras, Silvia Pescador López, Mariana Antoniol.

Status: [Draft]

Ultima actualización: 01/02/2023

## Contenido
- Downloading
- Goals
- Non-Goals
- Background
- Overview
- Detailed Design
  - Solucion 1
    - Frontend
    - Backend
  - Solucion 2
    - Frontend
    - Backend
- Consideraciones
- Métricas

## Links
- [Un link](#)
- [Otro link](#)

## Downloading
Flitter actualmente está alojado en GitHub. El proyecto se puede encontrar en [este enlace](https://github.com/No-Woman-No-Work/flitter). 

Si deseas seguir el desarrollo de Flitter, puedes descargar el código fuente a través de Git:

```git clone (https://github.com/No-Woman-No-Work/flitter)```

o 

``` git clone git@github.com:No-Woman-No-Work/flitter.git
```

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

## Overview
_Overview a alto nivel de tu propuesta_

_Esta sección debería ser entendible por nuevos miembros de tu equipo que no están relacionados al proyecto_

_Pon detalles en la siguiente sección_

// Hay que desarrollarlo pero la idea inicial es:

//incluyo esto para que nos ayude a luego redactarlo (sil)

STACK TECNOLÓGICO:
Backend - API 
Intérprete de Js = Nodejs
Framework =  Express (express-generator)
Base de datos noSQL = MongoDb
Conexión api con base de datos = Mongoose 
Sistema de autenticación = Json Web Token
Sistema de mailing = MailJet
Pruebas internas de desarrollo = Postman

Frontend:
Lenguaje = Javascript
Framework = Vue 3 (vue-CLI)
Estilo = Vue Composition API
Framework CSS = Boostrap
Conexión con backend = Axios
Manejador de estados = Vuex
Adaptación (transpiladores) a motores más antigüos de Js = Babel | WebPack

## Detailed Design
_Usa diagramas donde veas necesario_

_Herramientas como [Excalidraw](https://excalidraw.com) son buenos recursos para esto_

_Cubre los cambios principales:_

 _- Cuales son las nuevas funciones que vas a escribir?_
 _- Porque necesitas nuevos componentes?_
 _- Hay código que puede ser reusable?_

_No elabores minuciosamente la implementación._

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
