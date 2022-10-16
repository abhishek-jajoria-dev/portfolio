import React from 'react';
import PageTitle from '../components/pagetitle';
import CSRFToken from '../components/csrf_token';
import { useLocation } from 'react-router-dom'


function Contact(props) {
    const query = new URLSearchParams(useLocation().search);
    if(query.get('submit') === 'true') {
        alert('Your form has been submitted successfully.');
        query.set('submit', false);
        window.history.pushState({}, document.title, "/contact" );
    }
    return (
        <div>
            <PageTitle title='Contact Us' />
            <section className="tf-section tf-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="content-about m-b50 mobie-40" data-aos="fade-right" data-aos-duration="800">
                                <div className="tf-title st2 m-b17">
                                    <h4 className="title">Have a question </h4>
                                </div>
                                <p className="m-r-40">Fill up the Form  and I will get back to you within 24 hrs</p>
                            </div>
                            <form action="api/contact/" className="form-contact" method='Post'
                                id="contactform" data-aos="fade-right" data-aos-duration="800">
                                <CSRFToken />
                                <fieldset>
                                    <input type="text" name="name" id="name" placeholder="Name" required 
                                        pattern="[a-zA-Z ]{3,50}" minLength='3' maxLength='50'/>
                                </fieldset>
                                <fieldset>
                                    <input type="email" name="email" id="mail" placeholder="Email Address" 
                                        pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required minLength='5' maxLength='100'/>
                                </fieldset>
                                <fieldset>
                                    <input type="tel" name="phone" id="phone" placeholder="Phone" inputMode="numeric"
                                        pattern="[789][0-9]{9}" required minLength='10' maxLength='10'/>
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your Messege" rows="5" tabIndex="4" name="message"
                                    required minLength='10' maxLength='1000'
                                    className="message" id="message"></textarea>
                                </fieldset>
                                <button className="tf-button btn-effect" type="submit"><span className="boder-fade"></span><span className="effect">Send Message</span></button>
                            </form>
                        </div>
                        <div className="col-xl-7  col-md-12">
                            <div className="contact-details" data-aos="fade-left" data-aos-duration="800">
                                <div className="adress wrap-fx">
                                    <div className="location">
                                        <h6>Location</h6>
                                        <ul>
                                            <li>Moti Nagar, New Delhi, Delhi - 110015</li>
                                        </ul>
                                    </div>
                                    <div className="mail">
                                        <h6>Contact Us</h6>
                                        <ul>
                                            <li><a href="tel:8800487993">8800487993</a></li>
                                            <li><a href="mailto:abhishekjajoriaigl@gmail.com">abhishekjajoriaigl</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flat-map wow fadeIn animated" data-wow-delay="0.3ms" data-wow-duration="1000ms">
                                    <iframe title='map' className="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5888.070278840525!2d77.14271997079847!3d28.65769646423078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0301312fa2bf%3A0xcae12973d57000c4!2sMoti%20Nagar%2C%20DLE%20Industrial%20Area%2C%20Kirti%20Nagar%2C%20Delhi%2C%20110015!5e0!3m2!1sen!2sin!4v1663524219500!5m2!1sen!2sin" width="1720" height="655" allowFullScreen="" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;