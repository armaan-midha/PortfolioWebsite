import React from 'react';
import aboutPic from "../../Resources/Images/aboutPic2.jpg"
import "./styles/About.css";

function About() {

    const getAboutContent = () => {
        return (
            <section className="portfolio-about-content-wrapper">
                <h2>All about this portfolio website</h2>
                <p>This website provides my basic information and also represent the projects I have made in React. Different ways are used to represent data and projects in this website, be it react player, react slick or ant designs. I have made this website by dividing my website to different components and designing them individually and then combining them to the main component. DIfferent concepts of Javascript and React were used for implementation of this website. </p>
            </section>
        )
    }

    const getAboutBody = () => {
        return (
            <section className="portfolio-about-body-wrapper">
                {getAboutContent()}
                 <img src={aboutPic} />
            </section>
        )
    }

  return <section id="portfolio-about-wrapper">
        <h1>About</h1>
        {getAboutBody()}
      </section>;
}

export default About;
