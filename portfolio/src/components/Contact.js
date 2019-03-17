import React, { Component } from 'react'
import axios from 'axios';

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
                    flash: res.data.message
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
        return (
            <div>
                <section id="footer">
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
                            <button type='submit'>Send Message</button>
                        </form>
                        {this.state.flash &&
                            <div className="flash">
                                {this.state.flash}
                            </div>
                        }
                    </div>
                </section>
            </div>
        )
    }
}
