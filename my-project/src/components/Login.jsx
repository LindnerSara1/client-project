import { Input } from "antd";
import React, {useState, useContext ,UserOutlined} from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../context/User.context"

const Login = () => {

    const { login } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const innerLogin = (e) => {
        e.preventDefault();
        console.log('about to sign in', username, password);
        login(username, password);
    }

    return (
        <>
        <form onSubmit= { e => innerLogin(e)}>
            <Input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}  /> <br />
            <Input type="password" placeholder="password"  value={password} onChange={e => setPassword(e.target.value)} /> <br />
            <button type="submit"> login </button><br></br>
        </form>
        <div>אתה עדייין לא רשום? אתה יכול להתחבר עכשיו!</div>
        <Link to="/signUp">Sign up</Link>
        </>
    )
}
export default Login;