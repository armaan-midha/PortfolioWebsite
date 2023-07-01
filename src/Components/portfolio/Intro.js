import React from 'react';
import guyCoding from "../../Resources/Images/guyCoding.png";
import profileImage from "../../Resources/Images/profilePhoto.jpg";
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
                    <p>I am a professional web developer based in Bangalore with a strong foundation in Computer Science and Engineering. I have a Bachelor's degree in Computer Science and Engineering. As a passionate problem solver, I excel in Data Structures and Algorithms, and I have honed my skills through extensive practice on HackerRank, achieving a 4-star rating using Java.</p>
                    <p>I have hands-on experience in building projects using a variety of web development technologies, including <b>React and Ruby on Rails</b></p>
                    <p>I am actively seeking new opportunities in Software Engineering and SDE roles, where I can contribute my skills and continue to grow in a challenging environment.</p>
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
                {/* {getIntroVideo()} */}
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
