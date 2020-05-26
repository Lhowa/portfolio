import React from 'react';
import personalImage from '../resources/img/personal.jpg';

const About = () => {
    return(
        <div className='about-section' id='about'>
            <img alt='' id='about-image' src={personalImage} /><div>
                <h1 id='about-name'>Landon Howa</h1>
                <h2>Software Engineer</h2>
            </div>
            <p>
                Hello there! I'm Landon, a software engineer based in South Jordan, UT. My engineering background is
                mainly comprised of Java and Javascript among various other technologies. I have an Associate's 
                degree in Computer Science and Information Systems with Honors from Salt Lake Community College. 
                My studies mainly included software engineering, web development, and networking.
            </p>
        </div>
    )
}
export default About;