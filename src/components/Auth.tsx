import React, {useState} from 'react'
import { Register } from './Register'
import { Login } from './Login'

export const AuthComponent = () => {
    const [showLogin, setShowLogin] = useState<boolean>(true);

    const toggle = () => { 
        setShowLogin(!showLogin);
        console.log(showLogin);
    }

    return (
        showLogin ? <Login toggle={toggle} /> : <Register toggle={toggle} />
    );
}
