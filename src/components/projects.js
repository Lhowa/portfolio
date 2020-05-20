import React from 'react'

let projectsObjectsArray = [
    {title: 'Project 1', imagePath: 'image 1',description: 'description 1'},
    {title: 'Project 2', imagePath: 'image 2',description: 'description 2'},
    {title: 'Project 3', imagePath: 'image 3',description: 'description 3'},
    {title: 'Project 4', imagePath: 'image 4',description: 'description 4'},
    {title: 'Project 5', imagePath: 'image 5',description: 'description 5'},
    {title: 'Project 6', imagePath: 'image 6',description: 'description 6'}
]

const Projects = () => {

    return(
        <div className='projects-section' id='projects'>
            <h2>Projects</h2>
                <div className='projectsContainer'>
                    {projectsObjectsArray.map(project =>
                        (<div key={project.title} className='individualProjectContainer'>
                            <h3>{project.title}</h3>
                            <p>{project.imagePath}</p>
                            <p>{project.description}</p>
                        </div>)
                    )}
                </div>
        </div>
    )
}
export default Projects;