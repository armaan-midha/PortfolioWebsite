import React from 'react';
import profilePic from "../../Resources/Images/photo.JPG";
import emailIcon from "../../Resources/Images/emailIcon.svg";
import phoneIcon from "../../Resources/Images/phoneIcon.svg";
import linkedInIcon from "../../Resources/Images/linkedInIcon.svg";
import githubIcon from "../../Resources/Images/githubIcon.svg";
import { Rate } from 'antd';
import {CopyTwoTone} from '@ant-design/icons'
import 'antd/dist/antd.css';
import "./styles/ResumeBasicDetails.css";


function ResumeBasicDetails() {
    const getIdentity = () => {
        return (
            <section className="resume-basic-details-identity-wrapper">
                <img src={profilePic} alt="my photo" />
                <h2>Armaan Midha</h2>
            </section>
        )
    }

    const getAbout = () => {
        return (
            <section className="resume-basic-details-about-wrapper">
                <h3>About</h3>
                <p>I am a third year student pursuing B.Tech. in Computer Science and Engineering major at LPU. I do problem solving (Data Structures and Algorithms). I practice at HackerRank 4 🌟 using Java. I am well versed with the computer fundamentals like OOPs, Operating system and Database Management System.  I have built few projects in web development using HTML, CSS, JavaScript, React and PHP.</p>
            </section>
        )
    }

    const getContact = () => {
        return (
            <section className="resume-basic-details-contact-wrapper">
                <h3>Connect with me</h3>
                <section className="resume-basic-details-connect-container">
                <section className="resume-basic-details-connect-wrapper">
                    <img src={emailIcon} alt="email" />
                    <p>armaanmidha8@gmail.com</p>
                    <CopyTwoTone onClick={() => {navigator.clipboard.writeText("armaanmidha8@gmail.com@gmail.com")}}/>
                </section>
                <section className="resume-basic-details-connect-wrapper">
                    <img src={phoneIcon} alt="phone" />
                    <p>+91-9855191119</p>
                </section>
                <section onClick={()=>{window.open("https://www.linkedin.com/in/armaan-midha/","_blank")}} className="resume-basic-details-connect-wrapper">
                    <img src={linkedInIcon} alt="linkedIn" />
                    <p>LinkedIn</p>
                </section>
                <section onClick={()=>{window.open("https://github.com/armaan-midha","_blank")}} className="resume-basic-details-connect-wrapper">
                    <img src={githubIcon} alt="github" />
                    <p>Github</p>
                </section>
                </section>
            </section>
        )
    }

    const getSkills = () => {
        return (
            <section className="resume-basic-details-skills-wrapper">
                <h3>Skills</h3>
                <section>
                    <h4>Javascript</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={3.8} />
                </section>
                <section>
                    <h4>React.js</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={4.3} />
                </section>                
                <section>
                    <h4>HTML</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={4} />
                </section>                
                <section>
                    <h4>CSS</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={3.5} />
                </section>                
                <section>
                    <h4>C++</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={4} />
                </section>  
            </section>
        )
    }

    return (
        <div className="resume-basic-details-wrapper">
            {getIdentity()}
            {getAbout()}
            {getContact()}
            {getSkills()}
        </div>
    )
}

export default ResumeBasicDetails;
