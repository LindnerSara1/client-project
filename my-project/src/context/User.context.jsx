import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { config } from '../config';
import axios from 'axios';
import SignUp from "../components/SignUp";

export const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if(!user?.userName){
            navigate('/');
        }
        else{
            navigate('/main')
        }
    }, [user]);

    const contextValue = {
        user,
        async login (userName, password) {
            try {
                const {data: user} = await axios.post(`${config.api}/User/Login` , {
                    userName,
                    password,
                });
                setUser(user);
            }
            catch(error) {
                alert('error to sign in');
            }
        }
      
    }
    
    return <UserContext.Provider value={ contextValue } > 
                { children } 
            </UserContext.Provider>;
}
