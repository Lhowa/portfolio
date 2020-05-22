import React from 'react'

let skillsObjectsArray = [
    {title: 'Skill 1', imagePath: 'image 1'},
    {title: 'Skill 2', imagePath: 'image 2'},
    {title: 'Skill 3', imagePath: 'image 3'},
    {title: 'Skill 4', imagePath: 'image 4'},
    {title: 'Skill 5', imagePath: 'image 5'},
    {title: 'Skill 6', imagePath: 'image 6'},
    {title: 'Skill 7', imagePath: 'image 7'},
    {title: 'Skill 8', imagePath: 'image 8'}
]

const Skills = () => {
    return(
        <div className='skills-section' id='skills'>
            <h2>Skills</h2>
                <div className='skillsContainer'>
                    {skillsObjectsArray.map(skill =>
                        (<div key={skill.title} className='individualSkillContainer'>
                            <p>{skill.imagePath}</p>
                            <h3>{skill.title}</h3>
                        </div>)
                    )}
                </div>
        </div>
    )
}
export default Skills;