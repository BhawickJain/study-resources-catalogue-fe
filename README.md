# Study Resources App
<hr>
<p align="center">
⚠️ This team project is archived, but you can access the code and the development approach below ⚠️   
</p>
<hr>

This is a full-stack application using:

<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white" alt="Typescript" height=17> <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=flat&logo=heroku&logoColor=white" alt="Heroku" height=17> <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap" height=17> <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=flat&logo=netlify&logoColor=#00C7B7" alt="Netlify" height=17> <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=flat&logo=cypress&logoColor=058a5e" alt="cypress" height=17> <img src="https://img.shields.io/badge/-jest-%23C21325?style=flat&logo=jest&logoColor=white" alt="Jest" height=17> <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" alt="React" height=17> <img src="https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white" alt="NodeJs" height=17> <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white" alt="Postgres" height=17>

⚠️ The backend may take 3-5 minutes to warm up and may not have any resources to present ⚠️   

This repository is the front-end which is [deployed on netlify](https://bhawick-study-resource-catalogueue.netlify.app/).

The [backend repository](https://bhawick-study-resource-catalogueue.netlify.app/) which is deployed on Railway  was originally Heroku at the time of development.

## Overview

This a small full-stack application which allows a student to collaboratively submit and explore a shared catalogue of useful study resources (articles, exercise sets, youtube videos, tools, ebooks and podcasts).

### Features

The following features have been implemented in the application.

When a user visits the app:
- [x] They can see recommendations
- [x] They can find more recommendations:
- [x] They can search resources to find those that contain a given string in the name, description, tags, or author.
- [x] They can filter by tag to find all resources which have that tag
- [x] They can simulate signing in by selecting their name from a drop-down

When a user visits the app:
- [x] They can add a new resource recommendation (see "what's in a resource recommendation?")
- [x] If the resource they are recommending is already in the database, a duplicate should NOT be registered, rather:
	- [x] They can give a like or dislike (along with a comment, in each case) to a resource already in the db.
- [x] They can add or remove a resource from their “to-study” list.
- [x] They can view their “to-study” list.
- [x] They can simulate signing out by clicking an appropriate button or link


### CI/CD and Automated Testing

The project uses [Cypress](https://www.cypress.io/) and [Jest](https://jestjs.io/), along side [Github Actions](https://github.com/features/actions) to perform integration and unit tests.

Deployment is performed automatically either on Netlify or [Railway](https://railway.app/) (previously [Heroku](https://github.com/features/actions)) when a pull request is merged into main.

⚠️ for optimum constrast for image viewing, use `light mode` ⚠️   

### Database Design
![database design](./docs/img/db.svg)

### Application Architectural Diagram
![architectural diagram of the study resource app](./docs/img/architecture.svg)

### UI Wireframe
![ui wireframing of the frontend](./docs/img/ui-wireframe.svg)

### React Component Breakdown
![react component breakdown](./docs/img/react-component-breakdown.svg)

### Technical Presentation
We also held a presentation to provide an overview of how the full-stack app work behind the scenes [[link](https://docs.google.com/presentation/d/e/2PACX-1vTmVXJK8LDLYhjxsAiHCeQpqnghb8rR6fj6D7j8iM-G4Kg5vG_G3c9aVExLF8jEwql1AqBYoJXkSHV8/pub?start=false&loop=false&delayms=3000)]
