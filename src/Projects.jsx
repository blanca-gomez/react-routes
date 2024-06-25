/*información de project.js */
import React from 'react';
import projects from './data/projects';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <>
            <h1>Proyectos</h1>
            <ul>
                {projects.map((project) => (
                    <li>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={project.name} />
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank">{project.url}</a>
                    </li>
                ))}
            </ul>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Projects