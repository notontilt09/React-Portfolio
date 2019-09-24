import React from 'react';

import './Bio.css';

import noise_controller from '../assets/noise-controller.png';
import manaje from '../assets/manaje.png';
import guidr from '../assets/guidr.png';
// import insta from '../assets/insta.png';
import village from '../assets/village.png';

class Bio extends React.Component {
    scrollToStuff = () => {
        const stuff = document.querySelector('.stuff-i-do');
        stuff.scrollIntoView({
            block: 'start',
            inline: 'start',
            behavior: 'smooth'
        })
    }

    scrollToBio = () => {
        const bio = document.querySelector('#bio')
        bio.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        });
    }

    scrollToContact = () => {
        const contact = document.querySelector('#footer');
        contact.scrollIntoView({
            block: 'start',
            inline: 'start',
            behavior: 'smooth'
        })
    }

    scrollToTop = () => {
        const top = document.querySelector('#header');
        top.scrollIntoView({
            block: 'start',
            inline: 'start',
            behavior: 'smooth'
        })
    }

    render() {
        return ( 
            <section id="bio">
                <button className='scroller scroll-to-bio' onClick={this.scrollToTop}>&uarr;</button>
                <div className="who-i-am">
                    <div className="content">
                        <header className="major">
                            <h2>Who I am</h2>
                        </header>
                        <p>A former Mechanical Engineer and Professional Poker Player, my passion for programming led me to software engineering, specifically web development.  Let me help to build your dream application from the ground up, using cutting edge technologies and best software development practices for a great user experience and scalability.</p>
                    </div>
                </div>
                <button className='scroller scroll-to-proj' onClick={this.scrollToStuff}>&darr;</button>
                
                <div className="stuff-i-do">
                    <button className='scroller scroll-to-bio' onClick={this.scrollToBio}>&uarr;</button>
                    <div className="content">
                        <header className="major">
                            <h2>Stuff I do</h2>
                        </header>
                        <p>Past projects built using a combination of the following technologies.  Always willing to jump into a new stack and add to the list.</p>
                        <ul className="skills">
                            <li>
                                <p>UI: &nbsp; <span className="skill skill-ui"> CSS | HTML </span></p>
                            </li>
                            <li>
                                <p>Front End: &nbsp; <span className="skill skill-fe"> React | Javascript | Redux | Apollo</span></p>
                            </li>
                            <li>
                                <p>Back End: &nbsp;  <span className="skill skill-be"> Node.js | Express | Python | Flask | GraphQL </span></p>  
                            </li>
                            <li>
                                <p>DB: &nbsp;  <span className="skill skill-db"> MySQL | SQLite | Postgres | Prisma | Knex </span></p>
                            </li>
                        </ul>

                        <header className="major">
                            <h2 className="projects">Projects</h2>
                        </header>

                        <ul className="icons-grid">
                            <li>
                                <a href="https://manaje-refactor.netlify.com" className="project" target="_blank" rel="noopener noreferrer">
                                    <img src={manaje} alt="manaje" className="screenshot screenshot-left"></img>
                                    <div className="description description-right">
                                        <h3 className="proj-desc">Manaje</h3>
                                        <p>Refactored an existing codebase of a team management application using GraphQL to build the API, Prisma to interact with a postgres DB, and Apollo Client on the front end to interact with the GraphQL layer.  Added additional functionality to the app in the form of to do lists.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://thenoisecontroller.netlify.com/" className="project flip" target='_blank' rel="noopener noreferrer">
                                    <div className="description description-left">
                                        <h3 className="proj-desc">Noise Controller</h3>
                                        <p>An application for elementary school teachers to keep the noise level down in the classroom.  Led a team of developers using a React/Node/Express stack, and implemented extra game functionality using the native Javascript WebAudio API.</p>
                                    </div>
                                    <img src={noise_controller} alt="noise-controller" className="screenshot screenshot-right"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://guidr-react-dan.netlify.com/login" className="project" target="_blank" rel="noopener noreferrer">
                                    <img src={guidr} alt="guidr" className="screenshot screenshot-left"></img>
                                    <div className="description description-right">
                                        <h3 className="proj-desc">Guidr</h3>
                                        <p>An application for outdoor guides to arrange meetups with adventure seekers.  Front-end built with React.js and Redux and backend RESTful API built with Node.js and Express</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://thevillagenosh.com" className="project flip" target="_blank" rel="noopener noreferrer">
                                    <div className="description description-left">
                                        <h3 className="proj-desc">The Village Nosh</h3>
                                        <p>A single page application for a local bakery built in React.  Later updates include adding a backend for user acquisition and an e-commerce platform.</p>
                                    </div>
                                    <img src={village} alt="The Village Nosh" className="screenshot screenshot-right"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className='scroller scroll-to-contact' onClick={this.scrollToContact}>&darr;</button>
                </div>
            </section>
         );
    }
}
 
export default Bio;