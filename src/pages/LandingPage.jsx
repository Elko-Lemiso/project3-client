import React, { Component } from 'react';
import clean1 from "./../clean.gif"
import clean2 from "./../clean-2.gif"
import './LandingPage.scss'

class LandingPage extends Component {
    render() {
        return (
            <div className = "landing">
                <section className = "header">
                    <img src={clean1} alt=""/>
                    <div>
                        <h1>Clean or Relax</h1>
                        <p>Find reliable professionals for all your cleaning jobs in and around the house.</p>
                    </div>
                </section>
                <section className = "section-2">
                    <div>
                        <h1>Why Choose cleanR?</h1>
                    </div>
                    <div>
                    <p>We understand your home is important to you. Thats why we focus on the quality of the clean, with our unique algorithm tailored to find you the best cleaners available in your area.</p>
                    </div>
                </section>
                <section className = "header">
                    <img src={clean2} alt=""/>
                    <div>
                        <h1>Clean or Relax</h1>
                    </div>
                </section>
            </div>
        );
    }
}

export default LandingPage
