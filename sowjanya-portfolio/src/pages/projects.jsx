import React from 'react';

// Define an array of project objects
const projectData = [
    {
        title: "BuurtHub",
        duration: "Jun 2024 - Jul 2024",
        associated: "Associated with Ironhack",
        description: "BuurtHub is your go-to platform for staying connected with your community. It keeps you updated on the latest events and activities, allowing you to easily sign up for upcoming events and stay informed about important community announcements. BuurtHub also features a convenient marketplace for buying, selling, and offering services, fostering recycling, savings, and supporting the local economy.",
        skills: "React.js · MongoDB · Express.js · JavaScript",
        link: "https://buurt-hub.vercel.app/"
    },
    {
        title: "StyleSavvy",
        duration: "Apr 2024 - May 2024",
        associated: "Associated with Ironhack",
        description: "Style-Savvy is an application designed for booking appointments for a range of expert beauty services, including hair care, spa treatments, and nail services. Users can easily reserve a stylist and manage bookings. Future updates will expand its functionality to multiple users.",
        skills: "Client: React, PrimeReact, TailwindCSS, MaterialUI, Axios · Server: Node, Express, Adaptable (Mock server)",
        link: "https://stylesavvyproject.netlify.app/"
    },
    {
        title: "Battleship Game",
        duration: "Feb 2024 - Feb 2024",
        associated: "Personal Project",
        description: "Battleship is a single-player board game where users guess the locations of battleships hidden on a board. The game is built using HTML, CSS, and JavaScript. Players input guesses, and results are displayed with alerts. The game ends when all ships are sunk.",
        skills: "HTML5 · CSS · JavaScript",
        link: "https://sowjanyakambhampati.github.io/battleship-game"
    }
];

// Create the Projects component
const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            {/* Loop through the projectData array to render each project */}
            {projectData.map((project, index) => (
                <div key={index} style={projectContainerStyle}>
                    <h2>{project.title}</h2>
                    <p><strong>Duration:</strong> {project.duration}</p>
                    <p><strong>{project.associated}</strong></p>
                    <p>{project.description}</p>
                    <p><strong>Skills:</strong> {project.skills}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    <hr />
                </div>
            ))}
        </div>
    );
};

// Simple styling for each project container
const projectContainerStyle = {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
};

export default Projects;
