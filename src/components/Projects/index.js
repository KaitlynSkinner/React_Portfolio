import React, { useState } from 'react'
import Modal from '../Modal';

function Projects({ category }) {
  const [projects] = useState([
    {
      // Work_Day_Scheduler
      name: 'Work Day Scheduler',
      category: 'Third Party APIs',
      tools: ['jQUERY', 'Bootstrap', 'Moment.js', 'Materialize.css', 'Pure.css', 'Fonts'],
      description: 'A work day scheduler with colour-coded time slots and text areas user can save events to.',
      image: './assets/small/Third-Party-APIs/0.jpg',
      github_url: '',
      deployed_url: '',
      index: 0
    },
    {
      // Weather_Dashboard
      name: 'Weather Dashboard',
      category: 'Server-side APIs',
      tools: ['Object-oriented Programming', 'Javascript', 'Constructors', 'Classes', 'Prototypes', 'Test-driven Development'],
      description: 'A work day scheduler with colour-coded time slots and text areas user can save events to.',
      image: './assets/small/Server-side-APIs/1.jpg',
      github_url: '',
      deployed_url: '',
      index: 1
    },
    {
      // Blue Leaf Sports
      name: 'Blue Leaf Sports',
      category: 'Front-end',
      tools: ['jQuery', 'jQuery UI', 'Function.css', 'Google Fonts'],
      description: 'A real-world front-end application.',
      image: './assets/small/Front-end/2.jpg',
      github_url: '',
      deployed_url: '',
      index: 2
    },
    {
      // README.md Generator
      name: 'README Generator',
      category: 'Server-side',
      tools: ['Node.js', 'Inquirer'],
      description: "A command-line application that dynamically generates a professional README.md file from a user's input",
      image: './assets/small/Server-side/3.jpg',
      github_url: '',
      deployed_url: '',
      index: 3
    },
    {
      // Employee_Team_Generator
      name: 'Employee Team Profile Generator',
      category: 'Object-oriented Programming',
      tools: ['Node.js', 'Jest', 'Inquirer'],
      description: 'A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
      image: './assets/small/OOP/4.jpg',
      github_url: '',
      deployed_url: '',
      index: 4
    },
    {
      // Employee_Tracker - ** need screen shots
      name: 'Employee Tracker',
      category: 'SQL',
      tools: ['Node.js', 'MySQL', 'MySQL2', 'Inquirer', 'Console.table', 'Figlet'],
      description: "A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
      image: './assets/small/SQL/5.jpg',
      github_url: '',
      deployed_url: '',
      index: 5
    },
    {
      // Shop_Online  - ** need screen shots
      name: 'E-commerce Back End',
      category: 'Object-relational Mapping',
      tools: ['Node.js', 'Express.js', 'Sequelize', 'Dotenv', 'React'],
      description: "An e-commerce website where users can view all products, categories, and product tags.",
      image: './assets/small/ORM/6.jpg',
      github_url: '',
      deployed_url: '',
      index: 6
    },
    {
      // Tech_Blog
      name: 'Tech Blog',
      category: 'Model-view Controller',
      tools: ['Node.js', 'Express.js', 'Express.js Session', 'Handlebars.js', 'Sequelize', 'Sequelize Connect Session', 'MySQL2', 'Dotenv', 'Bcrypt', 'Nodemon', 'JawsDB'],
      description: "A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.",
      image: './assets/small/MVC/7.jpg',
      github_url: '',
      deployed_url: '',
      index: 7
    },
    {
      // Social_Netowrk_API
      name: 'Social Network API',
      category: 'NoSQL',
      tools: ['Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'Mongoose'],
      description: "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
      image: './assets/small/NoSQL/8.jpg',
      github_url: '',
      deployed_url: '',
      index: 8
    },
    {
      // Glide_Carpool_App
      name: 'Glide Carpool Application',
      category: 'Full-stack',
      tools: ['Node.js', 'Express.js', 'Express.js Session', 'Handlebars.js', 'Sequelize', 'Seuqelize Connet Session', 'MySQL2', 'Dotenv', 'Bcrypt', 'Nodemon', 'JawsDB', 'Faker'],
      description: "A carpooling app that helps drivers and passengers select activities. Users can signup and login to create or request rides to carpool to their selected activity. Users are able to meet new people as well as reduce their traveling costs.",
      image: './assets/small/Full-stack/9.jpg',
      github_url: '',
      deployed_url: '',
      index: 9
    },
  ]);

  const currentProject = projects.filter(project => project.category === category);

  // set initial state of isModalOpen to false, as the modal shouldn't open until a user has clicked on an image.
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="project-container">
      <div>
        {projects.map(project => (
          <img 
            className="project-imgs" 
            src={project.image}
            key={project.index}
            />
        ))}
      </div>
    </div>
  );
};

export default Projects;