# Team Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

The project was to create an easier way to view a development team on a single page of html.  It was to be a backend node application.  It also had several npm packages to prompt through a series of questions. The questions were similar for each employee with the exception of one that was different based on the role of the employee being entered into the system.  The general questions were asking for a name, id number, and email address. Then a job specific question was prompted for the manager it was the number of the office, the engineer was asked for a github, and lastly the intern was asked what school they went to.  After the general and specific questions were answered the user would then be prompted to add additional employees. If they wanted to add another employee they would be prompt through the questions again.  If they were done entering employees, then the application would render the data through a html renderer function and each of the employees would be made into corresponding cards. The app will run through every employee and then generate a html page that will display all the employees.

### Table Of Contents

-[Description](#Description)

-[Technologies](#Technologies)

-[Installation](#Installation)
   
-[Usage](#Usage)

-[Visuals](#Visuals)

-[Credits](#Credits)

-[License](#License) 

## Technologies

<details>
<summary>Expand to see technologies used</summary>

### Javascript

Node is the main avenue for our applications.  We use a lot of class constructors with a single main class constructor called "Employee".  Each job class is then made off of the employee constructor, those being Engineer, Intern, and Manager.  Each of those having a single specific property to the specific job.  All the classes have methods that are specific to them to grab that property.  We make use of npm files like inquirer to ask questions to the user.  Path to help write out our files. I made three separate functions.  The first function runs through the questions, and the user is prompted to answer each question.  After we gather that data, it is then used in the function that will arrange the data for us.  Before we arrange that there is one last property that needs to be gather.  It is the property that is job specific. So now that we have gotten the role from our previous function.  I can now prompt the user to answer a question specified to the job class.  After that data is gather we create an object correlating to the job class.  The last part of this function is calling the last function.  In this function we ask whether the user wants to make another employee.  If they do then it re-prompts the user through the questions again.  If the user doesn't want to enter another user then it creates a file that contains each of the job classes.  There is card being generated for each job class, that was collected from the prompt.  That file is then generated into the output folder that uses the path npm package reference a path file.  

### CSS

I made use of all the bootstraps classes to style the html.

### HTML

All the html was provided.  I add some additional spacing, and style provided by bootstrap.  Each html was setup to generate by the job class.

</details>

## Installation
    
    npm i

## Usage

    node app.js

For more details reference the video from 0:46 forward.

### Visuals

<details>
<summary>Screen Shots and Gif with Video link</summary>

![Photo of CLI](./develop/assets/cli.png)

![HTML created](./develop/assets/createdHtml.png)

![Employee js](./develop/assets/employeeJs.png)

![Engineer js](./develop/assets/engineerJs.png)

![Intern js](./develop/assets/internJs.png)

![Manager js](./develop/assets/managerJs.png)

Click on the gif to be linked to the video

[![Gif of video](./develop/assets/teamGenerator.gif)](https://drive.google.com/file/d/181Agg39TZ2LZbTeLjCsmY9YTilF6Ii0v/view)

</details>

## Credits

* [Node Documents](https://nodejs.org/api/index.html)
* [npm Documents](https://www.npmjs.com/)
* [GitHub Inquirer](https://github.com/SBoudrias/Inquirer.js#readme)
* [W3schools](https://www.w3schools.com/default.asp)
* [FontAwesome for icons ](https://fontawesome.com/v3.2.1/icons/) 
* [Mdn web docs general research](https://developer.mozilla.org/en-US/)

## License

MIT License

Copyright (c) 2020 David Wylie

## Contact

* [David Wylie github](https://github.com/wyliedavid1984)