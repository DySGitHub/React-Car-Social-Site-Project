# Assignment 1 - Car Seller ReactJS App.

Name: Dylan Sage

## Overview.
This application was built with ReactJS Framework for Software Systems Development Year 4 in the Software Frameworks module.  This application is a car selling where people can put up their cars for sale with an image and some car details, these uploaded cars can then be searched through on the site via the search box on the Home Page, they can also be deleted or edited. This Application has feedback section where users can leave site feedback, edit site feedback and delete site feedback. Using JSON Local Storage I am able to store the Cars persistently on the users local machine, if Database is empty then it is then seeded with 3 pieces of car data. This Application uses Cloudinary image hosting to upload and store car images that have been posted, the URL reference is then stored in the Database and retrieved when the Data is loaded. 

## User Features
+ Add a Car to the Car Sales Page with image upload 
+ Edit a Car on Car Sales Page
+ Delete a Car on Car Sales Page
+ Search Cars on Car Sales Page
+ Routing Through 4 Pages
+ Add Feedback on Contact Page
+ Delete Feedback on Contact Page
+ Edit Feedback on Contact Page

## Installation requirements.
+ ReactJS v15.4.2
+ Bootstrap 3 & React-BootStrap
+ Moment was Used to get the Post Date of a Users Car
+ Used create-react-app tool
+ React Dropzone used to pass the image data into ReactJS page.
+ Cloudinary was used to upload and store images online.
+ Superagent was used to handle upload of image to Cloudinary.
+ JSON Local Storage was used to store Data in a Semi-Persistant State.
+ NPM install and NPM start will need to be run after you download application to run the application. There is 3 default cars that are seeded in the application if the Database is empty.

## Data Model Design.

My Data model contains Car which contains the variables username, image, id, date, car make, car model, price and car description, the image is a cloudinary url that is being stored. My Data Model also contains Feedback which has the variables username, id, comment and date.

<img src=CarSellerModel.png alt=Model1 width="550" />

## App Component Design.

Here is my App Component Design.

<img src=CarSellerDesign.png alt=Component1 width="550" />

## UI Design.

In my UI there is a Submit Car Page, Home Page, Contact Page and an About page. There are 4 Screenshots below showing each page. There is also a Navigation Header and Footer on the Site, the UI has been designed using a mixture of bootstrap and css.

+UI Home Page Image
<img src=CarSellerScreenShot.PNG alt=UI1 width="550" />

+UI Submit Car Page Image
<img src=CarSellerScreenShot2.PNG alt=UI2 width="550" />

+UI Home Contact Image
<img src=CarSellerScreenShot3.PNG alt=UI3 width="550" />

+UI About Page Image
<img src=CarSellerScreenShot4.PNG alt=UI4 width="550" />						

## Routing.

+ Home: On this page you can view the cars in the system, search the cars in the system and delete or edit the cars in the system.
+ Submit Car: On this page you can submit your car with the relevant details and upload the image of the car.
+ Contact: On this page you can add feedback about the site, view feedback on the site, delete feedback on the site or edit feedback on the site.
+ About: On this page there is just dummy data about the company.


## Extra features

+ Search function for user to search all the cars in the system.   
+ Delete funciton for users to delete a car or Feedback in the system.
+ Edit funciton for users to edit a car or feedback in the system.
+ There is an ability for users to upload image to site.
+ Node Module React-Dropzone was added to upload the images to Cloudinary, this is then connected to the website  via a cloudinary URL and all  images are being stored in cloudinary. 
+ Moment Node Module is Used to get Current Date on the post when it is posted.
+ The site contains 4 routes and 2 data models.
+ The site is semi persistent with data being stored using JSON local storage.


## Independent learning.

+ I learned how to link React to Cloudinary and upload and retrive images using cloudinary with React.
+ I learned how to use the JSON local storage feature in the web application to store the data locally.
+ I learned how to search through the data in the system.
+ I learned how to delete & edit the data in the System.

