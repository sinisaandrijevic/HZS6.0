import { NavLink } from 'react-router-dom';
import './About.css'

import Lottie from 'lottie-react'
import animation from './animation2.json'

const About = () => {

    return (
        <div>
            <section class="about-us">
                <div class="about">
                    <div className='animation'>
                        <Lottie animationData={animation} />
                    </div>
                    <div class="text">
                        <h2>About Us</h2>
                        <h5>Sports match <span>Organiser</span></h5>
                        <p>
                            Welcome to our Web Application!
                            Discover the thrill of sports like never before. Our platform lets you turn every match into a personalized card, adding your unique insights and predictions. Connect with fellow fans, share your cards, and celebrate the excitement of sports together. Sign up now and elevate your sports experience.
                        </p>
                        <div class="data">
                            <NavLink to='/' activeClassName='active'><a href="#" class="hire">Check it out</a></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;