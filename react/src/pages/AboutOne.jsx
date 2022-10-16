import React from 'react';

import PageTitle from '../components/pagetitle';
import About from '../features/about/home-v2';
import dataAbout from '../assets/fake-data/data-about';
// import Team from '../features/team/home-v2';
// import dataTeam from '../assets/fake-data/data-team';
// import Partner from '../features/partner';
// import dataPartner from '../assets/fake-data/data-partner';

import dataRoadmap from '../assets/fake-data/data-roadmap';
import RoadMap from '../features/roadmap/home-v3';


function AboutOne(props) {
    return (
        <div className='about'>
            <PageTitle title='About Us' />

            <About data={dataAbout} />

            <RoadMap data={dataRoadmap} />

            {/* <Team data={dataTeam} /> */}

            {/* <Partner data={dataPartner} /> */}

        </div>
    );
}

export default AboutOne;