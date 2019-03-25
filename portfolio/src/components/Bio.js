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

    render() {
        return ( 
            <section id="bio">
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
                                <span className="icon major fas fa-calculator"></span>
                                <a href="https://dan-calculator.netlify.com/" target='_blank' rel="noopener noreferrer"><h3>React Calculator</h3></a>
                            </li>
                            <li>
                                <span className="icon major fab fa-instagram"></span>
                                <a href="https://dan-instagram.netlify.com/" target="_blank" rel="noopener noreferrer"><h3>React IG Clone</h3></a>
                            </li>
                            <li>
                                <span className="icon major fas fa-plane"></span>
                                <a href="https://guidr-react-dan.netlify.com/login" target="_blank" rel="noopener noreferrer"><h3>Redux Guidr App</h3></a>
                            </li>
                            <li>
                                <i className="icon major fas fa-code"></i>
                                <a href="https://react-node-express-lotr.netlify.com/" target="_blank" rel="noopener noreferrer"><h3>Node Web API</h3></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Bio;