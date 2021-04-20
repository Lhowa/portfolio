import React from 'react';
import personalImage from '../resources/img/personal.jpg';
import JavascriptLogo from '../resources/img/javascript.png';
import NodejsLogo from '../resources/img/nodejs.png';
import ReactLogo from '../resources/img/react.png';
import Powershell from '../resources/img/powershell.png';
import AwsLogo from '../resources/img/aws.png';
import PythonLogo from '../resources/img/python.png';



let skillsObjectsArray = [
    {title: 'JavaScript', imagePath: JavascriptLogo},
    {title: 'Nodejs', imagePath: NodejsLogo},
    {title: 'React', imagePath: ReactLogo},
    {title: 'AWS', imagePath: AwsLogo},
    {title: 'Python', imagePath: PythonLogo},
    {title: 'Powershell', imagePath: Powershell},
]

const About = () => {
    return(
        <div className='about-section' id='about'>
            <img alt='' id='about-image' src={personalImage} /><div>
                <h1 id='about-name'>Landon Howa</h1>
                <h2>Software/Systems/Devops Engineer</h2>
            </div>
            <p>
                Hello there! I'm Landon, a software engineer based in South Jordan, UT. My engineering background is
                centered around Java, Javascript, and various other technologies. I have an Associate's 
                degree in Computer Science and Information Systems with Honors from Salt Lake Community College. 
                My studies included software engineering, web development, and networking.
            </p>
            <p>Actively working with: </p>
            <div className='skillsContainer'>
                    {skillsObjectsArray.map(skill =>
                        (<div key={skill.title} className='individualSkillContainer'>
                            <img alt='' src={skill.imagePath} />
                            <p>{skill.title}</p>
                        </div>)
                    )}
                </div>
        </div>
    )
}
export default About;