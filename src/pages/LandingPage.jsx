import React, { Component } from 'react';
import clean1 from "./../images/clean.gif"
import clean2 from "./../images/clean-2.gif"
import clean3 from "./../images/clean3.gif"
import '../components/nav.scss'

class LandingPage extends Component {
    render() {
        return (
            <div className = "landing">
                <section className = "header">
                    <div className="image">
                        <img src={clean1} alt=""/>
                    </div>
                    <div className = "info">
                        <h1>Clean or Relax</h1>
                        <p>Find reliable professionals for all your cleaning jobs in and around the house.</p>
                    </div>
                </section>
                <section className = "section1">
                    <div>
                        <h1>Why Choose cleanR?</h1>
                        <p>We understand your home is important to you. Thats why we focus on the quality of the clean, with our uniquely tailored algorithm to find you the best cleaners available in your area.</p>
                        <p>We can promise:</p>
                        <ol>
                            <li>1. Quick responses from potential cleaners</li>
                            <li>2. A full review of the cleaners portfolio</li>
                            <li>3. A bless to the mess</li>
                        </ol>
                    </div>
                    <div>
                        <h1>Looking for work, be a cleanR</h1>
                        <p>Are you a student, looking for work? We know work can sometimes be hard to find, and we here at cleanR beleive in working for ourselves, join us and make a few extra coins. Who knows what might happen.</p>
                        <p>We can deliver:</p>
                        <ol>
                            <li>1. Quick and easy money, just a tap away</li>
                            <li>2. Reviewed clients by other cleaners</li>
                            <li>3. A job every day should you need one</li>
                        </ol>
                    </div>
                </section>
                                
                <section className = "section-row">
                    <h1>How it works</h1> 
                    <div className="row">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px"><linearGradient id="BchpD1ZNe2zSYgMqtimVEa" x1="46" x2="46" y1="9.916" y2="13.924" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#BchpD1ZNe2zSYgMqtimVEa)" d="M43 11H49V13H43z"/><linearGradient id="BchpD1ZNe2zSYgMqtimVEb" x1="18" x2="18" y1="9.916" y2="13.924" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#BchpD1ZNe2zSYgMqtimVEb)" d="M15 11H21V13H15z"/><linearGradient id="BchpD1ZNe2zSYgMqtimVEc" x1="32" x2="32" y1="25.667" y2="30.003" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#BchpD1ZNe2zSYgMqtimVEc)" d="M39,28c0,0.552-0.448,1-1,1H26c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h12 C38.552,27,39,27.448,39,28L39,28z"/><linearGradient id="BchpD1ZNe2zSYgMqtimVEd" x1="32" x2="32" y1="8.667" y2="55.681" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#BchpD1ZNe2zSYgMqtimVEd)" d="M55.945,41.167L54.13,15.78C54.02,14.22,52.7,13,51.14,13H51v-1c0-1.654-1.346-3-3-3h-4 c-1.654,0-3,1.346-3,3v1h-0.14c-1.56,0-2.88,1.22-2.99,2.79L37.352,23H26.648l-0.518-7.22C26.02,14.22,24.7,13,23.14,13H23v-1 c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1h-0.14c-1.56,0-2.88,1.22-2.99,2.79L8.055,41.167C6.865,41.566,6,42.678,6,44v8 c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3v-8c0-1.322-0.865-2.434-2.055-2.833L27.362,33h9.277l-0.584,8.167 C34.865,41.566,34,42.678,34,44v8c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3v-8C58,42.678,57.135,41.566,55.945,41.167z M43,12 c0-0.551,0.448-1,1-1h4c0.552,0,1,0.449,1,1v1h-6V12z M40.86,15h10.28c0.52,0,0.96,0.41,1,0.93L52.216,17H39.784l0.076-1.07 C39.9,15.41,40.34,15,40.86,15z M40,25c0.552,0,1,0.448,1,1v4c0,0.552-0.448,1-1,1H24c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1 H40z M15,12c0-0.551,0.448-1,1-1h4c0.552,0,1,0.449,1,1v1h-6V12z M12.86,15h10.28c0.52,0,0.96,0.41,1,0.93L24.216,17H11.784 l0.076-1.07C11.9,15.41,12.34,15,12.86,15z M28,52c0,0.552-0.448,1-1,1H9c-0.552,0-1-0.448-1-1v-1h10v-2H8v-2h6v-2H8v-1 c0-0.552,0.448-1,1-1h18c0.552,0,1,0.448,1,1V52z M25.924,41H10.076l1.565-22h12.716l0.282,4H24c-1.654,0-3,1.346-3,3v4 c0,1.654,1.346,3,3,3h1.352L25.924,41z M40,33c1.654,0,3-1.346,3-3v-4c0-1.654-1.346-3-3-3h-0.639l0.282-4h12.716l1.565,22H38.076 l0.572-8H40z M55,53H37c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h18c0.552,0,1,0.448,1,1v1h-6v2h6v2H46v2h10v1 C56,52.552,55.552,53,55,53z"/></svg>
                            <h3>Find a cleaner</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px"><linearGradient id="swqI2SlaZWgv8qXkhwPKWa" x1="32" x2="32" y1="7.5" y2="56.752" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#swqI2SlaZWgv8qXkhwPKWa)" d="M32,56c-1.077,0-2.046-0.555-2.591-1.484l-3.694-6.314c-0.759-1.299-2.099-2.185-3.675-2.432 c-9.479-1.482-16.37-9.85-16.027-19.462C6.371,16.213,15.083,8,25.432,8h13.137c10.349,0,19.061,8.213,19.419,18.308 c0.343,9.611-6.549,17.979-16.028,19.462c-1.575,0.247-2.915,1.133-3.674,2.432l-3.694,6.313C34.046,55.445,33.077,56,32,56z M25.432,10c-9.285,0-17.1,7.348-17.421,16.378C7.705,34.98,13.869,42.467,22.35,43.793c2.173,0.341,4.028,1.579,5.092,3.398 l3.694,6.313C31.397,53.952,31.827,54,32,54s0.603-0.048,0.864-0.496l3.694-6.313c1.063-1.819,2.919-3.058,5.091-3.398 c8.481-1.327,14.646-8.813,14.34-17.415C55.668,17.348,47.854,10,38.568,10H25.432z"/><linearGradient id="swqI2SlaZWgv8qXkhwPKWb" x1="25" x2="25" y1="21.5" y2="28.5" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#swqI2SlaZWgv8qXkhwPKWb)" d="M25 21.998A3 3 0 1 0 25 27.998A3 3 0 1 0 25 21.998Z"/><linearGradient id="swqI2SlaZWgv8qXkhwPKWc" x1="39" x2="39" y1="21.5" y2="28.5" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#swqI2SlaZWgv8qXkhwPKWc)" d="M39 21.998A3 3 0 1 0 39 27.998A3 3 0 1 0 39 21.998Z"/><linearGradient id="swqI2SlaZWgv8qXkhwPKWd" x1="32" x2="32" y1="29.625" y2="37.375" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#swqI2SlaZWgv8qXkhwPKWd)" d="M36,30h-8c-0.552,0-1,0.446-1,0.998v1c0,2.761,2.239,5,5,5s5-2.239,5-5v-1 C37,30.446,36.552,30,36,30z"/><linearGradient id="swqI2SlaZWgv8qXkhwPKWe" x1="32" x2="32" y1="7.5" y2="56.752" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#swqI2SlaZWgv8qXkhwPKWe)" d="M26 12H38V14H26z"/></svg>
                            <h3>Let them know what needs doing</h3>
                            
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px"><linearGradient id="tXu54Kp6YqZVIlGnJHOxOa" x1="32" x2="32" y1="38.5" y2="45.502" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#tXu54Kp6YqZVIlGnJHOxOa)" d="M27.107,39c-0.615,0-1.114,0.553-0.996,1.157C26.651,42.917,29.082,45,32,45 c2.918,0,5.349-2.083,5.888-4.843C38.007,39.553,37.508,39,36.893,39H27.107z"/><linearGradient id="tXu54Kp6YqZVIlGnJHOxOb" x1="32" x2="32" y1="5.333" y2="58.718" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#tXu54Kp6YqZVIlGnJHOxOb)" d="M32,12c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z M32,50 c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S41.925,50,32,50z"/><linearGradient id="tXu54Kp6YqZVIlGnJHOxOc" x1="32" x2="32" y1="5.333" y2="58.718" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#tXu54Kp6YqZVIlGnJHOxOc)" d="M36,27c-1.103,0-2,1-2,2h-4c0-1-0.897-2-2-2l-10,0c-1.103,0-2,0.897-2,2l0,2 c0,3.309,2.691,6,6,6l2,0c3.309,0,6-2.691,6-6l4,0c0,3.309,2.691,6,6,6h2c3.309,0,6-2.691,6-6v-2c0-1.103-0.897-2-2-2H36z M28,31 c0,2.206-1.794,4-4,4l-2,0c-2.206,0-4-1.794-4-4l0-2l1.586,0l-0.293,0.293c-0.391,0.391-0.391,1.023,0,1.414 C19.488,30.902,19.744,31,20,31s0.512-0.098,0.707-0.293L22.414,29l2.172,0l-2.293,2.293c-0.391,0.391-0.391,1.023,0,1.414 C22.488,32.902,22.744,33,23,33s0.512-0.098,0.707-0.293L27.414,29H28L28,31z M46,31c0,2.206-1.794,4-4,4h-2c-2.206,0-4-1.794-4-4 v-2h1.586l-0.293,0.293c-0.391,0.391-0.391,1.023,0,1.414C37.488,30.902,37.744,31,38,31s0.512-0.098,0.707-0.293L40.414,29h2.172 l-2.293,2.293c-0.391,0.391-0.391,1.023,0,1.414C40.488,32.902,40.744,33,41,33s0.512-0.098,0.707-0.293L45.414,29H46V31z"/><linearGradient id="tXu54Kp6YqZVIlGnJHOxOd" x1="26.409" x2="26.409" y1="5.333" y2="58.718" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#tXu54Kp6YqZVIlGnJHOxOd)" d="M20.819,23c0.274,0,0.548-0.112,0.745-0.333C24.22,19.701,28.023,18,31.999,18 c0.553,0,1-0.447,1-1c0-0.553-0.447-1-1-1c-4.544,0-8.891,1.943-11.925,5.333c-0.368,0.411-0.333,1.044,0.078,1.412 C20.343,22.916,20.581,23,20.819,23z"/><linearGradient id="tXu54Kp6YqZVIlGnJHOxOe" x1="32" x2="32" y1="5.333" y2="58.718" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#tXu54Kp6YqZVIlGnJHOxOe)" d="M58,32c0-1.912-1.209-3.766-3.345-5.167c0.229-1.288,0.093-2.596-0.403-3.824 c-0.529-1.312-1.445-2.426-2.618-3.203c0.566-2.548,0.118-4.823-1.249-6.19s-3.641-1.815-6.19-1.249 c-0.777-1.173-1.892-2.089-3.204-2.618c-1.228-0.497-2.534-0.634-3.823-0.403C35.766,7.209,33.912,6,32,6s-3.766,1.209-5.167,3.345 c-1.289-0.23-2.597-0.094-3.824,0.403c-1.31,0.529-2.43,1.446-3.208,2.617c-2.546-0.567-4.82-0.116-6.186,1.25 c-1.367,1.367-1.815,3.643-1.249,6.19c-1.173,0.777-2.089,1.892-2.618,3.204c-0.496,1.228-0.633,2.535-0.403,3.823 C7.209,28.234,6,30.088,6,32s1.209,3.766,3.345,5.167c-0.229,1.288-0.093,2.596,0.403,3.824c0.529,1.312,1.445,2.426,2.618,3.203 c-0.566,2.548-0.118,4.823,1.249,6.19c1.368,1.368,3.647,1.817,6.19,1.248c0.778,1.174,1.893,2.09,3.204,2.619 c1.228,0.497,2.534,0.634,3.823,0.403C28.234,56.791,30.088,58,32,58s3.766-1.209,5.167-3.345c1.289,0.23,2.597,0.094,3.824-0.403 c1.311-0.529,2.425-1.445,3.203-2.619c2.546,0.569,4.823,0.12,6.19-1.248c1.367-1.367,1.815-3.643,1.249-6.19 c1.173-0.777,2.089-1.892,2.618-3.204c0.496-1.228,0.633-2.535,0.403-3.823C56.791,35.766,58,33.912,58,32z M53.024,35.82 c-0.403,0.229-0.597,0.705-0.467,1.15c0.319,1.092,0.264,2.223-0.159,3.271c-0.451,1.116-1.294,2.032-2.374,2.58 c-0.431,0.218-0.644,0.713-0.507,1.176c0.634,2.139,0.429,3.997-0.547,4.974c-0.977,0.977-2.834,1.182-4.974,0.546 c-0.46-0.135-0.958,0.076-1.176,0.507c-0.548,1.08-1.464,1.924-2.579,2.375c-1.049,0.423-2.18,0.479-3.271,0.159 c-0.447-0.133-0.922,0.063-1.15,0.467C34.764,54.888,33.336,56,32,56s-2.764-1.112-3.82-2.976c-0.182-0.319-0.518-0.507-0.87-0.507 c-0.093,0-0.188,0.013-0.28,0.04c-1.093,0.319-2.224,0.264-3.271-0.159c-1.116-0.451-2.032-1.295-2.58-2.375 c-0.219-0.431-0.717-0.641-1.176-0.507c-2.14,0.636-3.997,0.431-4.974-0.546c-0.976-0.977-1.181-2.835-0.547-4.974 c0.137-0.463-0.076-0.958-0.507-1.176c-1.08-0.548-1.923-1.464-2.374-2.579c-0.423-1.049-0.479-2.18-0.159-3.271 c0.13-0.445-0.063-0.921-0.467-1.15C9.112,34.764,8,33.336,8,32s1.112-2.764,2.976-3.82c0.403-0.229,0.597-0.705,0.467-1.15 c-0.319-1.092-0.264-2.223,0.159-3.271c0.451-1.116,1.294-2.032,2.374-2.58c0.431-0.218,0.644-0.713,0.507-1.176 c-0.634-2.139-0.429-3.997,0.547-4.974c0.976-0.976,2.836-1.181,4.974-0.547c0.468,0.136,0.962-0.079,1.179-0.512l0.056-0.119 c0.552-1.017,1.447-1.815,2.521-2.25c1.049-0.423,2.18-0.479,3.271-0.159c0.443,0.131,0.921-0.063,1.15-0.467 C29.236,9.112,30.664,8,32,8s2.764,1.112,3.82,2.976c0.229,0.403,0.704,0.598,1.15,0.467c1.091-0.321,2.223-0.264,3.271,0.159 c1.116,0.451,2.032,1.294,2.58,2.374c0.218,0.43,0.707,0.642,1.176,0.507c2.137-0.633,3.998-0.43,4.974,0.547 s1.181,2.835,0.547,4.974c-0.137,0.463,0.076,0.958,0.507,1.176c1.08,0.548,1.923,1.464,2.374,2.579 c0.423,1.049,0.479,2.18,0.159,3.271c-0.13,0.445,0.063,0.921,0.467,1.15C54.888,29.236,56,30.664,56,32S54.888,34.764,53.024,35.82 z"/></svg>
                            <h3>Relax</h3>
                        </div>
                    </div>
                </section>

                <section className = "section-row">
                <h1>What sets cleanR apart</h1>
                    <div className="row">
                        <div>
                            <h2>Personal</h2>
                            <p>Upfront conversations with the applicants for the job, giiving the client and the cleanR the liberty to choose.</p>
                        </div>
                        <div>
                            <h2>Reliable</h2>
                            <p>You pick the right professional for the job, based on their previous ratings, this ensures total transparency between a client and a cleanR.</p>
                        </div>
                        <div>
                            <h2>Fair rates</h2>
                            <p>You get to determine what a job is worth doing, but don't make it too low, you might just end up doing the dishes</p>
                        </div>
                    </div>
                </section>
                <footer>

                </footer>
            </div>
        );
    }
}

export default LandingPage
