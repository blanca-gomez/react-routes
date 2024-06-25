/*Bienvenida y enlaces a projects y resume
 Este componente mostrará la página de inicio del portfolio. 
 En esta página, se mostrará una breve descripción del desarrollador.
*/
import React from 'react';
import {Link} from 'react-router-dom';


function Home () {
    return(
        <>
            <h1>Desarrollador Web FullStack</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/resume'}>Experiencia laboral y educativa</Link>
                    </li>
                    <li>
                        <Link to={'/projects'}>Proyectos realizados</Link>
                    </li>
                </ul>
            </nav>
        
        </>
    );
};


export default Home;
