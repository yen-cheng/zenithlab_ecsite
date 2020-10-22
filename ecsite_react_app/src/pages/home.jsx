import React from 'react';

import {NavBar} from '../components/nav-bar/nav-bar.component';
import {Carousel} from '../components/carousel/carousel.component';
import {MainContain} from '../components/main-contain/main-contain.component';

class Home extends React.Component{
    render(){
        return (
            <div>
                <NavBar></NavBar>
                <Carousel></Carousel>
                <MainContain></MainContain>
            </div>
        )
    }
}

export default Home;