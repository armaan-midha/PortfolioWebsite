import React from 'react';
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {

    const getResumeCTA = () => {
        return (
            <section className="resume-CTA footer-resume-CTA">
                <Link className="resume-link" to="resume">Resume</Link>
            </section>
        )
    }

    const getFooterContent = () => {
        return (
            <section className="portfolio-footer-content-wrapper">
                <section className="portfolio-footer-message-wrapper">
                    <h1>Let's Talk</h1>
                    <p>Welcome! Check out my portfolio website. I'm actively seeking SDE and Web Development roles. Reach out to me via the mentioned platforms, and explore my projects on GitHub. Looking forward to connecting with you. Thanks for visiting!<br/><a href="tel:+91-9855191119">Contact me</a></p>
                </section>
                    <section className="portfolio-intro-card-social-wrapper">
                        <LinkedinFilled style={{fontSize:"30px", color:"#F9F3F3"}} onClick={() => window.open("https://www.linkedin.com/in/armaan-midha/", "_blank")} />
                        <GithubFilled style={{fontSize:"30px", color:"#F9F3F3"}} onClick={() => window.open("https://github.com/armaan-midha", "_blank")} />
                        <FacebookFilled style={{fontSize:"30px", color:"#F9F3F3"}} onClick={() => window.open("https://www.facebook.com/amidha12", "_blank")} />
                    </section>
            </section>
        )
    }

    return (
        <section className="portfolio-footer-wrapper">
            {getResumeCTA()}
            {getFooterContent()}
        </section>
    )
}

export default Footer;
