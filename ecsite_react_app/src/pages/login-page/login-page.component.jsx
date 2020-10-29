import React from 'react';

import LogoContainer from '../../components/logo-container/logo-container.component';

import "./login-page.style.scss";

class LoginPage extends React.Component{
    render(){
        return (
            <div className="login-page-container">
                <div className="logo">
                    <LogoContainer></LogoContainer>
                </div>
                <div className="login">
                    <h3>LOGIN</h3>
                    <form className="login-form">
                        <input type="email" className="login-form__email" placeholder="Email Address"></input>
                        <input type="password" className="login-form__password" placeholder="Password"></input>
                        <button>Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;