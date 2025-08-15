# Taskmanager-api
___
## Functionalities

- Create Users
- Edit Users 
- Delete Users 
>
- Create Tasks
- Edit Task
- Delete Task
>
- Mark Complete Task
>
- Show the general description of the project

___

## Routes

* /api/
    * /user
    * /task
    * /description

The route `/api` is the base route for all others routes

The route `/api/user` is the route that handles the user functions

The route `/api/task` is the route that handles the task tunctions

The route `/api/description` is the route that return the project description

___

## Structure

### User

- id : string
- username : string
- password : encoded string
- status : enum = ( admin, normal )

### Task

- id : string
- name : string
- description : string
- userid : id
- maxdate : date 

### Description 

- projectname : string
- general-information : string
- general-functions : string[]
- structure : string[]

___

## Methods

### Users 

#### Method `Get()`

this method return all users names and id 

#### Method `Post()`

This method recive in the body the new user informarion for create the new user and return a stat8s code

#### Method `Put()`

This method recive in the body the created user information for edit the created user and return status code 

#### Method `Delete()`

This meth0d delete a user by thir id

### Task

#### Method `Get()`

This method return all created tasks

#### Mthod `Post()`

This mehtod recive in the body the new taks information for create the new task and return a status code 

#### Method `Put()`

This method recive in the body created task information for edit the created task and return a status code

#### Method `Delete()`

This method delete the task by their id 

### Description 

#### Method `Get((`

This method return the all information of the project 

___

## Data Base

### Json File 

In this file is the description of the project in json format

### MongoDB

In this data base is the users and the tasks data. This database is named has taskmanager and have two collections, 1) users, 2) task that contain the information respectively
