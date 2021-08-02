# Plataforma

## A little about the project

This project was developed during an immersion promoted by the company Code Miner 42.  [Code Miner 42](https://www.codeminer42.com/) .
The immersion had as objective that undergraduate students in the technology area had an experience as close as possible to the reality
of the software development market. This immersion, in particular, being the first one, served as a "test", and went through some study processes,
to verify the best approach to adopt, which mechanisms and so on.
It started with practical challenges, one of which is here on my github Access the link to see one of the challenges I submitted 
[Access the link to see one of the challenges I submitted](https://github.com/jardessonribeiroTI/Codeminer42-Desafio2). Later, the challenge was divided into pairs, 
and each pair was responsible for developing an application, and my pair decided to develop a course platform.
Due to some problems with git, this repository will be the complete project, but if you want to see the original repositories with Pull Requests and Code Reviews
[go to this link](https://github.com/jardessonribeiroTI/plataforma/).

## Project objectives

Create a platform for the student to register or purchase the course, and be able to access their classes. In this way, the platform had a login system, 
for each student to have data referring to their learning process, such as completed classes, progress, and each part of the course was divided into modules.

## Technologies used

The project was built entirely using JavaScript language. In the backend we use Node [Site Node](https://nodejs.org/en/), along with the framework
Express [Site Express](https://expressjs.com/pt-br/), TypeScript [Site TypeScript](https://www.typescriptlang.org/) 
and the TypeORM [Site TypeORM](https://typeorm.io/#/). We also use The relational database, Postgrees [Site](https://www.postgresql.org/)
, however, for convenience and for having used it before, I used Postgrees inside a Docker container [Site Docker ](https://www.docker.com/) 
via a docker image taken directly from the DockerHub [Docker Hub Site](https://hub.docker.com/_/postgres). 
In the frontend we use React js [Site React Js](https://pt-br.reactjs.org/) together with the framework Nextjs [Site Nextjs](https://vercel.com/docs/next.js/overview) .



## The project
### Result of the project's frontend in its functioning
1. #### **Login**
![login](https://user-images.githubusercontent.com/45296422/127885793-327d68ac-1810-4a44-9d91-67e50ede46ed.png)

##### Description
The login works with the email that the student is properly registered and with his default password.

2. #### **Redefine Password**
![redefine](https://user-images.githubusercontent.com/45296422/127885990-00260ae2-2cd3-49c2-95fd-cec5c7fd9d61.png)

##### Description
Here the user enters his email to receive a verification email that will redirect to change the forgotten password.

3. #### **Enter the new password**
![reset](https://user-images.githubusercontent.com/45296422/127886252-b0105bb3-b35b-4e57-9a80-cc020f6fe8d8.png)

##### Description
Here the user will inform the new password and confirm.

4. #### **Lessons page**
![lesson](https://user-images.githubusercontent.com/45296422/127886694-4d463b76-ba86-43bc-9c19-1b790b4f1d96.png)

##### Description
Once logged in, the user is redirected to the page they will actually see as their classes. On the left is your progress and your 
percentage of classes attended, further down are the course modules, and each class, when attended, is marked with a green check. 
In the middle is the class play, a little above, the previous and next class buttons, the username and exit.

## How to run the project

##### Previous recommendations.
It is necessary that you have on your machine the technologies listed above, if not, go to the site of each one of them, and see what is needed to download them.

To download the project, do the following command on your terminal

1. Run
<br/>$ mypasta/git clone https://github.com/jardessonribeiroTI/plataforma-imersao-codeminer42.git

2. Next
<br/>$ myfolder/ cd platform-immersion-codeminer42

#### Step to backend

3. Next you will enter each folder to download the dependencies of each one
<br/>$ myfolder/platform-immersion-codeminer42/ cd backend

4. Next execute the command
<br/>$ mypasta/plataforma-imersao-codeminer42/backend/ yarn install

5. Before running, it is necessary to run the project's migrations, for that run
<br/>$ mypasta/plataforma-imersao-codeminer42/backend/yarn typeorm migration:run

6. Finally, run the command
<br/>$ mypasta/plataforma-imersao-codeminer42/backend/ yarn start

#### Step to frontend

3. Next you will enter each folder to download the dependencies of each one in Backend
<br/>$ myfolder/platform-immersion-codeminer42/ cd frontend

4. Next execute the command
<br/>$ mypasta/plataforma-imersao-codeminer42/backend/ yarn install

5. Finally, run the command
<br/>$ mypasta/plataforma-imersao-codeminer42/backend/ yarn run dev

## Author's final note about the project.

This project had a short time and was developed during the academic term of the university, and could not have a greater focus on its development.
However, he fulfilled his duty to show us and make experience about software development and have an experience of "real life of a programmer", 
deadlines, PR's, code review, and meetings. There are many things to improve on this project and, of course, complete it with all the necessary
functionality. But it has already served a lot for my knowledge and improvement as a programmer and even as a person.

Author: Járdesson Ribeiro.
