import React from 'react';
import aboutPic from "../../Resources/Images/aboutPic2.jpg"
import "./styles/About.css";

function About() {

    const getAboutContent = () => {
        return (
            <section className="portfolio-about-content-wrapper">
                <h2>All about this portfolio website</h2>
                <p>Welcome! Check out my portfolio website. I'm actively seeking SDE and Web Development roles. Reach out to me via the mentioned platforms, and explore my projects on GitHub. Looking forward to connecting with you. Thanks for visiting!</p>
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
