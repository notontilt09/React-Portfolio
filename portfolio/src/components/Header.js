import React from 'react';
import Typed from 'typed.js';

class Header extends React.Component {
    componentDidMount() {
        const strings = [
            'Daneil',
            'Daniel Weinman'
        ];

        const strings2 = [
            '^5000 Engineer',
            'Professional Poker Dude',
            'Full Stack Web Developer'
        ]

        
        const options = {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 100,
            onComplete: () => {
                const cursor1 = document.querySelector('.typed-cursor');
                setTimeout(() => cursor1.remove(), 2000)
            }
        };
        
        const options2 = {
            strings: strings2,
            typeSpeed: 50,
            backSpeed: 30,
            onComplete: () => {
                const cursor2 = document.querySelector('.typed-cursor');
                setTimeout(() => cursor2.remove(), 3000)
            }
        }

        this.typed = new Typed(this.el, options)
        this.typed.start();
        this.typed2 = new Typed(this.el2, options2);
        this.typed2.start();
    }

    render() {
        return ( 
            <section id="header">
                <header className="type-wrap">
                    <h1>
                        <span ref={(el) => this.el = el}></span>
                    </h1>
                    <div className="header-hr"><hr></hr></div>
                    <p>
                        <span ref={(el2) => this.el2 = el2}></span>
                    </p>
                </header>
            </section>
         );
    }
}
 
export default Header;