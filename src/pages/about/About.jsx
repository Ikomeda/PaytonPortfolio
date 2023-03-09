import React from 'react';
import MyPic from '../../assets/Payton.jpg';
import "./about.css";

const About = () => {
    return (
    <section className="hero">
        

        <div className="hero-inner">
            <img className="hero-img" src={MyPic} alt="Me Cheesin" />
            
            <div className="hero-text">
                <section id="about">
                    <h2>About Me</h2>
                    <p className="about-text">Hey there, I just finished a fullstack boot-camp through UofU. 
                        I'm very much a nerd, but more of a jack of all trades kind of one. I dabble in a lot of things, like MTG, Board Games, YuGiOh, Anime, Dungeons and Dragons, and so much more.
                        I also LOVE hiking, getting together with friends and family, and binging shows with my wife.
                    </p>
                </section>
            </div>
        </div>
    </section>

    )
}


export default About