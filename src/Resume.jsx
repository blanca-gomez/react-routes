/*Resume: información de resume.js */

import React from 'react';
import { studies, experiences } from "./data/resume";
import { Link } from 'react-router-dom';


function Resume () {

    return(
        <>
            <div>
                <h1>Curriculum</h1>
                <h2>Formación</h2>
                <ul>
                    {studies.map((study)=> (
                        <li>
                            <h3>{study.title}</h3>
                            <p>{study.institution}</p>
                            <p>{study.date}</p>
                        </li>
                    )
                    )}
                </ul>
                <h2>Experiencia laboral</h2>
                <ul>
                    {experiences.map((experience)=> (
                        <li>
                            <h3>{experience.title}</h3>
                            <p>{experience.company}</p>
                            <p>{experience.date}</p>
                        </li>
                    )
                    )}
                </ul>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        </>
    );
};


export default Resume;