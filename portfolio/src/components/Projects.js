import React from 'react';

const Bio = () => {
    return ( 
        <>
            <section>
                <div className="container">
                    <div className="content">
                        <header className="major">
                            <h2>Stuff I do</h2>
                        </header>
                        <p>Past projects built using a combination of HTML/CSS for basic design, React/Redux to create interactive UI's, and Node.js/Express for the backend.</p>
                        <ul className="icons-grid">
                            <li>
                                <span className="icon major fa-calculator"></span>
                                <a href="https://dan-calculator.netlify.com/" target='_blank' rel="noopener noreferrer"><h3>React Calculator</h3></a>
                            </li>
                            <li>
                                <span className="icon major fa-instagram"></span>
                                <a href="https://dan-instagram.netlify.com/" target="_blank" rel="noopener noreferrer"><h3>React IG Clone</h3></a>
                            </li>
                            <li>
                                <span className="icon major fa-plane"></span>
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
        </>
     );
}
 
export default Bio;