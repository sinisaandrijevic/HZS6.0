import './Contact.css'

const Contact = () => {
    return (
        <div className='contact_wrapper'>
            <section>
                <div class="row">
                    <h1>Our Team</h1>
                </div>
                <div class="row">

                    <div class="column">
                        <a href='https://sinisaandrijevic.com'>
                            <div class="card">
                                <div class="img-container">
                                    <img src="https://sinisaandrijevic.com/assets/img/profile.jpg" />
                                </div>
                                <h3>Siniša</h3>
                                <p>Team Lead</p>
                            </div>
                        </a>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="img-container">
                                <img src="profile-img-2.png" />
                            </div>
                            <h3>Matke</h3>
                            <p>Developer & Designer</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="img-container">
                                <img src="profile-img-3.png" />
                            </div>
                            <h3>Džoni</h3>
                            <p>Developer</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="img-container">
                                <img src="profile-img-3.png" />
                            </div>
                            <h3>Marija</h3>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;