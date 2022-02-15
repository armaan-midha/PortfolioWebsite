import React from 'react';
import guyCoding from "../../Resources/Images/guyCoding.png";
import profileImage from "../../Resources/Images/photo.JPG";
import ReactPlayer from 'react-player'
import { WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import "./styles/Intro.css";

function Intro() {

    const getIntroCard = () => {
        return (
            <section className="portfolio-intro-card-wrapper">
                <section className="portfolio-intro-card-bg-image">
                    <img src={guyCoding} />
                </section>
                <section className="portfolio-intro-card-content-wrapper">
                    <img src={profileImage}/>
                    <h2>Armaan Midha</h2>
                    <p>I am a third year student pursuing B.Tech. in Computer Science and Engineering major at LPU. I do problem solving (Data Structures and Algorithms). I practice at HackerRank 4 🌟 using Java. I am well versed with the computer fundamentals like OOPs, Operating system and Database Management System.  I have built few projects in web development using HTML, CSS, JavaScript, React and PHP.  I am highly interested and open to interview for the Software Engineer and SDE roles.</p>
                    <div className="resume-CTA"><Link className="resume-link" to="resume">Resume</Link></div>
                </section>
            </section>
        )
    }

    const getIntroVideo = () => {
        let playerWidth = window.innerWidth > 660 ? "500px" : "100vw";
        return (<ReactPlayer width={playerWidth} height="400px" url='https://youtu.be/EXPFdC9i6ZQ' />)
    }

    const getIntroBody = () =>{
        return (
            <section className="portfolio-intro-body-wrapper">
                {getIntroCard()}
                {getIntroVideo()}
            </section>
        )
    }

  return (
  <div className="portfolio-intro-wrapper">
        <h1>Introduction</h1>
        {getIntroBody()}
        <div className="connect-whatsapp" onClick={()=>{window.open("https://wa.me/919855191119?text=Hello Armaan, I want to talk to you regarding an opening in my company.")}}>
            <WhatsAppOutlined style={{color:"#fff", fontSize:"30px"}}/>
        </div>
  </div>
  )
}

export default Intro;
