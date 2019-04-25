import React from 'react';

import './Bio.css';

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
                        <p>Past projects built using a combination of HTML/CSS for basic design, React/Redux to create interactive UI's, and Node.js/Express for the backend.</p>
                        <ul className="icons-grid">
                            <li>
                                <a href="https://dan-calculator.netlify.com/" target='_blank' rel="noopener noreferrer">
                                    <span className="icon fas fa-calculator"></span>
                                    <h3 className="proj-desc">Calculator</h3>
                                    <p>A fully functioning basic calculator built with React.js</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://dan-instagram.netlify.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="icon fab fa-instagram"></span>
                                    <h3 className="proj-desc">Insta</h3>
                                    <p>A project built to mimic an Instragram feed, complete with login, comments, and like/unlike functionality built with React.js</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://guidr-react-dan.netlify.com/login" target="_blank" rel="noopener noreferrer">
                                    <span className="icon fas fa-plane"></span>
                                    <h3 className="proj-desc">Guidr</h3>
                                    <p>An application for outdoor guides to arrange meetups with adventure seekers.  Front-end built with React.js and Redux and backend RESTful API built with Node.js and Express</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://manaje-refactor.netlify.com" target="_blank" rel="noopener noreferrer">
                                    <i className="icon fas fa-tasks"></i>
                                    <h3 className="proj-desc">Manaje</h3>
                                    <p>Refactored an existing codebase of a team management application using GraphQL to build the API, Prisma to interact with a postgres DB, and Apollo Client on the front end to interact with the GraphQL layer.  Added additional functionality to the app in the form of to do lists.</p>
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