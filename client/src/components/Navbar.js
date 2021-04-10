import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav">
                <div className="nav__wrapper">
                    <a href="/" onClick={logoutHandler}>Log Out</a>
                </div>
            </div>
        </nav>
    )
}