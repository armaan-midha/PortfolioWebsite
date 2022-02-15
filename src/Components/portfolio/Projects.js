import React from 'react';
import Clock from "../clock/Clock";
import Todo from "../toDo/Todo";
import DiceGame from "../scarne/DiceGame";
import Quote from '../quote/Quote';
import "./styles/Projects.css";

function Projects() {

    const getClock = () => {
        return (
            <section className='protfolio-projects-clock-wrapper'>
                <Clock />
                <section className='protfolio-projects-clock-description-wrapper'>
                    <h2>Digital Clock</h2>
                    <p>This digital clock behaves like any other clock and updates time every second. The time is represented in a string. The time string is placed in a div and made beautiful using CSS.</p>
                    <ul>
                        <li>I have used date object which helped to fetch date and time of browser.</li>
                        <li>I have made a functional component which has useEffect hook which runs after render and tells DOM to perform updates.</li>
                        <li>The first component of useEffect hook calls the function which fetches time and the other argument takes the time after which it updates.</li>
                    </ul>
                </section>
            </section>
        )
    }

    const getTodoApp = () => {
        return (
            <section className='protfolio-projects-todo-wrapper'>
                <section className='protfolio-projects-clock-description-wrapper'>
                    <h2>Todo App</h2>
                    <p>This is a todo list project. User can add his task in the list and can tick the task when completed. User can also star the important task. There's also a dark mode which changes color properties of the project.</p>
                    <ul>
                       <li>I have used useState hook which constantly checks if a user has inputted something and if yes then it updates and displays it to list.</li>
                       <li>For dark mode again useState hook is used ehich constantly checks if user wants to switch to dark mode and if button is clicked the hook manipulates with dom and changes CSS of the app.</li>
                       <li>The tasks are stored in an unordered list which is placed in a wrapper which gives it effect of a card.</li>
                    </ul>
                </section>
                <Todo />
            </section>
        )
    }

    const getDiceGame = () => {
        if (window.innerWidth < 661) {
            return (
                <section className='protfolio-projects-dicegame-wrapper'>
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Dice Game</h2>
                        <p>This is a retro dice game from the era of arcades. This game has 2 players who throws dice. The rules of this game are that 1st player rolls the die until he encouters 1 on die or he just passes the turn. Now if player 1 rolls die has get numbers from 2-6 they get added to his current score and if he enconters 1 his current score gets zero, and if player 1 passes its turn before encountring 1 whatever will be it's current score gets added to his total score. Same is with player 2. The player whose total score gets 20 first wins the game.</p>
                        <ul>
                           <li>In this project both useState and UseEffect hooks are used. useState is used get current score and useEffect updates the current score as the player is rolling. useState is also used to get current player and also the dice image corresponding to dice number.</li>
                           <li>1 + (Math.round(Math.random() * 10) % 6) is used to get random numbers between 1-6. Then useState hook displays this random number in form of corresponding dice image.</li>
                           <li>To give this project a retro look all the fonts, images and buttons are made to look like retro times.</li>
                        </ul>
                    </section>
                    <DiceGame />
                </section>
            )
        }
        return (
            <section className='protfolio-projects-dicegame-wrapper'>
                <DiceGame />
                <section className='protfolio-projects-clock-description-wrapper'>
                    <h2>Dice Game</h2>
                    <p>This is a retro dice game from the era of arcades. This game has 2 players who throws dice. The rules of this game are that 1st player rolls the die until he encouters 1 on die or he just passes the turn. Now if player 1 rolls die has get numbers from 2-6 they get added to his current score and if he enconters 1 his current score gets zero, and if player 1 passes its turn before encountring 1 whatever will be it's current score gets added to his total score. Same is with player 2. The player whose total score gets 20 first wins the game.</p>
                    <ul>
                        <li>In this project both useState and UseEffect hooks are used. useState is used get current score and useEffect updates the current score as the player is rolling. useState is also used to get current player and also the dice image corresponding to dice number.</li>
                        <li>1 + (Math.round(Math.random() * 10) % 6) is used to get random numbers between 1-6. Ten useState hook displays this random number in form of corresponding dice image.</li>
                        <li>To give this project a retro look all the fonts, images and buttons are made to look like retro times.</li>                 
                    </ul>
                </section>
            </section>
        )
    }

    const getQuote = () => {
        return (
            <section className='protfolio-projects-quote-wrapper'>
                <section className='protfolio-projects-clock-description-wrapper'>
                    <h2>Quote Generator</h2>
                    <p>This project fetches and displays random quotes. The refresh button fetches new quote everytime clicked. The glow button changes the text using text-shadow property</p>
                    <ul>
                        <li>The quotes are fetched from API https://api.quotable.io/random using axios and displays the output in json format.</li>
                        <li>Every time refresh button is clicked an api call is made and data is recived, then eseEffect hook updates data.</li>
                        <li>useSate hook handles the glow mode and changes accordingly</li>
                    </ul>
                </section>
                <Quote />
            </section>
        )
    }


    const getAllProjects = () => {
        return (
            <section className='protfolio-projects-together-wrapper'>
                {getClock()}
                {getTodoApp()}
                {getDiceGame()}
                {getQuote()}
            </section>
        )
    }

    return (
        <section id='protfolio-projects-wrapper'>
            <h1>Projects</h1>
            {getAllProjects()}
        </section>
    )
}

export default Projects;
