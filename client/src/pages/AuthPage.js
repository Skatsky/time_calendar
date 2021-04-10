// import { set } from 'mongoose'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Auth.context'
import { useHttp } from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'


export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    },[error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className="wrapper">
            <div className="wrapper_field">
                <h2>Authorization</h2>
                <div className="input__container">
                    <label htmlFor="login" className="white-text">Login</label>
                    <input placeholder="Input login..." id="login" type="text" className="validate" name="login" onChange={changeHandler}/>
                </div>
                <div className="input__container">
                    <label htmlFor="password" className="white-text">Password</label>
                    <input placeholder="Input password..." id="password" type="password" className="validate" name="password" onChange={changeHandler}/>
                </div>
                <div className="container__action">
                    <button className="container__action_btn log" onClick={loginHandler} disabled={loading}>Log In</button>
                    <button className="container__action_btn reg" onClick={registerHandler} disabled={loading}>Log Up</button>
                </div>
            </div>
        </div>
    )
}