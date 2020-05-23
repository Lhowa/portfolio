import React from 'react'
import BootstrapLogo from '../resources/img/bootstrap.png';
import Css3Logo from '../resources/img/css3.png';
import GithubLogo from '../resources/img/github.png';
import HerokuLogo from '../resources/img/heroku.png';
import Html5Logo from '../resources/img/html5.png';
import JavaLogo from '../resources/img/java.png';
import JavascriptLogo from '../resources/img/javascript.png';
import JqueryLogo from '../resources/img/jquery.png';
import MongodbLogo from '../resources/img/mongodb.png';
import MysqlLogo from '../resources/img/mysql.png';
import NginxLogo from '../resources/img/nginx.png';
import NodejsLogo from '../resources/img/nodejs.png';
import ReactLogo from '../resources/img/react.png';
import DigitaloceanLogo from '../resources/img/digitalocean.png';
import UbuntuLogo from '../resources/img/ubuntu.png';
import WordpressLogo from '../resources/img/wordpress.png';
import AwsLogo from '../resources/img/aws.png';
import PhpLogo from '../resources/img/php.png';



let skillsObjectsArray = [
    {title: 'Bootstrap', imagePath: BootstrapLogo},
    {title: 'CSS3', imagePath: Css3Logo},
    {title: 'Github', imagePath: GithubLogo},
    {title: 'Heroku', imagePath: HerokuLogo},
    {title: 'HTML5', imagePath: Html5Logo},
    {title: 'Java', imagePath: JavaLogo},
    {title: 'JavaScript', imagePath: JavascriptLogo},
    {title: 'jQuery', imagePath: JqueryLogo},
    {title: 'MongoDB', imagePath: MongodbLogo},
    {title: 'MySQL', imagePath: MysqlLogo},
    {title: 'NGINX', imagePath: NginxLogo},
    {title: 'Nodejs', imagePath: NodejsLogo},
    {title: 'React', imagePath: ReactLogo},
    {title: 'Digital Ocean', imagePath: DigitaloceanLogo},
    {title: 'Ubuntu', imagePath: UbuntuLogo},
    {title: 'Wordpress', imagePath: WordpressLogo},
    {title: 'AWS', imagePath: AwsLogo},
    {title: 'PHP', imagePath: PhpLogo}
]

const Skills = () => {
    return(
        <div className='skills-section' id='skills'>
            <h2>Skills</h2>
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
export default Skills;