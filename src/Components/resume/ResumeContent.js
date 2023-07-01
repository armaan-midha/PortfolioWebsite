import React from 'react';
import "./styles/ResumeContent.css";

function ResumeContent() {

  const getUserExperience = (company, year, work) => {
    return (
      <section className="resume-content-user-experience-wrapper">
        <section className="resume-content-company-year-wrapper">
          <h4>{company}</h4>
          <p>{year}</p>
        </section>
        <section className="resume-content-user-experience-bullet">
          <ul>
            {
              work.map((list, index) => <li key={index}>{list}</li>)
            }
          </ul>
        </section>
      </section>
    )
  }

  //Assignment- Digital clock, Todo app, Random quote generator, scarne's dice => 

  const getExperience = () => {
    return (
      <section className="resume-content-experience-wrapper">
        <section>
          <h3>Experience</h3>
        </section>
        {getUserExperience("Summer Intern, IBM", "June-2021-July-2021", ["Designed a full stack website using laravel and phyMyadmin", "Learnt CSS, Bootstrap and and different sql queries"])}
      </section>
    )
  }

  const getUserEducation = (degree, year, institution, marks) => {
    return (
      <section className="resume-content-user-education-wrapper">
        <section className="resume-content-degree-year-wrapper">
          <h4>{degree}</h4>
          <p>{year}</p>
        </section>
        <section className="resume-content-intitution-marks-wrapper">
          <h5><b>{institution}</b></h5>
          <p>{marks}</p>
        </section>
      </section>
    )
  }

  const getEducation = () => {
    return (
      <section className="resume-content-education-wrapper">
        <section><h3>Eduation</h3></section>
        {getUserEducation("B.TECH (COMPUTER SCIENCE ENGINEERING)", "2019-2023", "Lovely Professional University, Phagwara, Punjab", "CGPA-7.47")}
        {getUserEducation("SENIOR SECONDARY", "2018-2019", "CBSE, Rose Mary Convent School, Bathinda, Punjab.", "Percentage: 77%")}
        {getUserEducation("MATRICULATION", "2016-2017", "ICSE, Little Flower Convent School, Muktsar, Punjab.", "Percentage: 82%")}
      </section>
    )
  }

  const getInterests = () => {
    return (
      <section className="resume-content-interest-wrapper">
        <section><h3>Interests</h3></section>
        <h4>Roller Hockey,Dseigning websites, Reading Technology blog</h4>
      </section>
    )
  }

  const getAchivAndCert = () => {
    return (
      <section className="resume-content-achive-cert-wrapper">
        <section><h3>Achivements & Certifications</h3></section>
        <ul>
          <li>Completion of Industry oriented project using PHP</li>
          <li>Problem Solving Skills certification test using Java</li>
        </ul>
      </section>
    )
  }

  const getUserProjects = (name, timePeriod, work) => {
    return (
      <section className="resume-content-user-projects-wrapper">
        <section className="resume-content-user-project-name-wrapper">
          <h4>{name}</h4>
          <p>{timePeriod}</p>
        </section>
        <section className="resume-content-user-project-work-wrapper">
          <ul>
            {
              work.map((list, index) => <li key={index}>{list}</li>)
            }
          </ul>
        </section>
      </section>
    )
  }

  const getProjects = () => {
    return (
      <section className="resume-content-projects-wrapper">
        <section><h3>Projects </h3></section>
          {getUserProjects("Todo App","Jan-2022",["This is a todo list project. User can add his task in the list and can tick the task when completed.","User can also star the important task. There's also a dark mode which changes color properties of the project."])}
          
          {getUserProjects("Scarne's Dice","Feb-2022",["This is a retro dice game from the era of arcades. This game has 2 players who throws dice.", "To give this project a retro look all the fonts, images and buttons are made to look like retro times."])}
      </section>
    )
  }

  return (
    <div className="resume-content-wrapper">
      {getEducation()}
      {getExperience()}
      {getProjects()}
      {getAchivAndCert()}
      {getInterests()}
    </div>
  )
}

export default ResumeContent;
