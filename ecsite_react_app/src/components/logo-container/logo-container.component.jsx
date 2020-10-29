import React from "react";
import {withRouter} from 'react-router-dom';

import logo from '../../assets/icon/rat.svg';
import './logo-container.style.scss';

const LogoContainer = ({history})=>{

    return(
        <div className="logo-container" >
            <img onClick={()=>history.push("/")} src={logo} className="logo" alt="logo"/>
        </div>
    );
}

export default withRouter(LogoContainer);