import "./About.css";

import TJS from "./tj.png";
const About = () => {
    return (
        <section className="container">
            <div className="about-grid">
                <div><img src={TJS} alt="Tasneem Jannat Sultan"/></div>             
                <div>
                    <h2>Hi! I'm Tasneem</h2>
                    <p>I am a creative front-end web developer with working experience in UI/UX design, from Dhaka, Bangladesh. Currently working at OFA Support as a Front-End Engineer in Miyazaki, Japan. I graduated in Computer Science and Engineering.</p>
                    <p>I have over 3 years of experience as a developer, UI/UX designer and loved working with Laravel, React and other latest frameworks. I have extensive experience working on Wordpress as well.</p>
                    <p>Currently designing and developing front-end in React Js and CMS in WordPress (HTML, CSS, PHP, JavaScript, Figma)</p>
                    <p>In my free time, you can find me <a style={{color:'#E94F0C' , fontStyle:'italic'}} href="https://www.instagram.com/blink_n_click/" target="_blank" rel="noreferrer">creating</a> art, cheffing up some dishes, and watching animes and movies.</p>
                    <p>Feel free to check out my <a style={{color:'#3B9E86' , fontStyle:'italic'}} href={`/${'Tasneem_Jannat-Resume.pdf'}`} target="_blank" rel="noreferrer">resume</a> or <a style={{color:'#B4875A' , fontStyle:'italic'}} href="mailto:iamtasneemj@gmail.com" >connect</a> with me.</p>
                </div>
            </div>

        </section>
    );
};
export default About;