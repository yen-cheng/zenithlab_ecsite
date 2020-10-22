import React from 'react';

import {HeaderNavbar} from '../components/header-navbar/header-navbar.component';
import {Carousel} from '../components/carousel/carousel.component';
import {MainContain} from '../components/main-contain/main-contain.component';

class HomePage extends React.Component{
    render(){
        return (
            <div>
                <HeaderNavbar></HeaderNavbar>
                <Carousel></Carousel>
                <MainContain></MainContain>
            </div>
        )
    }
}

export default HomePage;