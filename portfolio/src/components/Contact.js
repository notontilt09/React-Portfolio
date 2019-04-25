import React, { Component } from 'react'
import axios from 'axios';

import './Contact.css';
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        flash: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        axios.post('https://weinman-portfolio-server.herokuapp.com/send', message)
            .then(res => {
                this.setState({
                    flash: res.data.message,
                    name: '',
                    email: '',
                    message: ''
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    scrollToBio = () => {
        const bio = document.querySelector('#bio')
        bio.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        });
    }

    scrollToStuff = () => {
        const stuff = document.querySelector('.stuff-i-do');
        stuff.scrollIntoView({
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
            <div id="footer">
                <button className='scroller scroll-up-to-stuff' onClick={this.scrollToStuff}>&uarr;</button>
                <section className="contact-me">
                    <div className="container">
                        <header className="major">
                            <h2>Get in touch</h2>
                        </header>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                className="name-input"
                                type="text" 
                                name="name" 
                                value={this.state.name} 
                                onChange={this.handleChanges}
                                placeholder="Name"
                                required
                            />
                            <input 
                                className="email-input"
                                type="text" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleChanges}
                                placeholder="Email"
                                required
                            />
                            <textarea  
                                className="message-input"
                                name="message" 
                                value={this.state.message} 
                                onChange={this.handleChanges}
                                placeholder="Message"
                                required
                            />
                            <button className='msg-btn' type='submit'>Send Message</button>
                        </form>
                        {this.state.flash &&
                            <>
                                <div className="flash">
                                    {this.state.flash}
                                </div>
                                <button className='scroller bottom-scroller' onClick={this.scrollToTop}>&uarr;&uarr;&uarr;</button>

                            </>
                        }
                    <div className="links">
                        <h3>dan@weinman.dev</h3>
                        <a href="http://github.com/notontilt09" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github-link" />
                        </a>
                        <a href="http://linkedin.com/in/daniel-weinman" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin-link" />
                        </a>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}
