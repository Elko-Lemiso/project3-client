## Content
* [Intro](#intro)
* [Main features](#main-features)
* [Setup](#setup)
* [General info](#general-info)
* [Stack](#stack)
* [Created by](#created-by)
* [Repository, Client side](https://github.com/nardokra/cleanr-client)
* [Repository, API side](https://github.com/nardokra/cleanr-api)
* [Live preview: cleanr.netlify.app](https://cleanr.netlify.app/)

## Status: Refactoring
This was a 1.5 week project. Currently we are refactoring the code in bits and pieces. Current focus is error handling, loading feedback, protected routes in the backend..

## Intro
This is our final project of our Ironhack Full-stack development Bootcamp (in total 10 weeks). We had 8 working days to develop this project. Ironhack is a Global Tech School ranked top 3 worldwide. The project was realized without the intervention of a ux / ui designer, pure focussed on applying our new gained coding skills.

CleanR is a platform application to bring the demand for cleaning and cleaners together.

The application is making use of two user types: Cleaners and clients
Clients are able to post their cleaning jobs. Cleaners are able to apply for the jobs.
The clients are in charge of approving an application and to determine if a job is done.
Upon application a chat conversation is started.

## Main features
  * Authorization, for signup with encryption
  * Authentication, for login with encryption
  * Editing user profiles
  * Posting cleaning jobs
  * Messaging between users
  * Jobs overview and search
  * Cleaners overview and search
  * Geo coding, integrated upon sign up and job posting
  * Google maps API, integrated in the jobs detailpages
  * Database API, used for saving and reading all the user actions and to keep track of user sessions.

## Setup
To run the application: npm start after installing node modules (npm i). This is the client side of the application.
    
## General info
    1) The app consists out of a client side and an api side.
    2) The application is connected via API with the database.
    3) The database is making use of 4 models. Users, Jobs, Conversations and Messages.
    4) The whole application is responsive.
    5) We took care to keep the code as clean and readable as possible.
    6) For images we used Cloudinary.
    7) For styling we made use of SCSS.
    8) We added a favicon and the title for the website.

## Stack
ReactJS, HTML, SCSS, NodeJS, ExpressJS, MongoDB, Mongoose

## Created by
    The development of this application is a collaboration between Elko Lemiso and Nardo Kraaijeveld
