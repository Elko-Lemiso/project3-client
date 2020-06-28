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
                <section className = "header">
                    <img src={clean2} alt=""/>
                    <div>
                        <h1>Clean or Relax</h1>
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
