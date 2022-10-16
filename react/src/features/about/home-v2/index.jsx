import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item';
import Button from '../../../components/button';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'About us',
            title: 'A little introduction about myself.',
            desc : "Hello!. My name is Abhishek Jajoria. I enjoy creating things that live on the internet. My interest in web development started back in 2019.My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients."
        }
    )

    return (
        <section className="tf-section tf-about style2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p className='pd20'>{dataBlock.desc}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            {
                                data.map(item => (
                                    <AboutItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="btn-about" data-aos="fade-up" data-aos-duration="800">
                            <Button title='Read More' path='' disabled/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;