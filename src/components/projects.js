import React from 'react'

let projectsObjectsArray = [
    {title: 'Project 1', imagePath: 'image 1',description: 'description 1'},
    {title: 'Project 2', imagePath: 'image 2',description: 'description 2'},
    {title: 'Project 3', imagePath: 'image 3',description: 'description 3'}
]

const Projects = () => {

    return(
        <div className='projects-section' id='projects'>
            <h2>Projects</h2>
                {projectsObjectsArray.map(project =>
                    (<ul key={project.title}>
                       <h3>{project.title}</h3>
                       <p>{project.imagePath}</p>
                       <p>{project.description}</p>
                    </ul>)
                )}
        </div>
    )
}
export default Projects;