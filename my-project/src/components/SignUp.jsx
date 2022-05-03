import React from 'react';
import { Link  , useNavigate} from "react-router-dom";
const SignUp=()=>{
        const navigate = useNavigate();
        //הפונקציה תבוא מהקונטקסט והיא זו שתבדוק האם זה יוזר נכון
        const signFunc = () => {
            
            navigate("/main");
        }
    return(
        <>
        <h1>אנו שמחים שבחרת להצטרך אלינו, אנא הכנס את הפרטים שלך!!!</h1>
        <form onSubmit={signFunc}>
            <input placeholder='user name' required = "true"></input><br/>
            <label>הכנס סיסמא</label>
            <input type="password" required = "true"></input><br/>
            <label>אימות סיסמא</label>
            <input type="password" required = "true"></input><br/>
            <label>מייל</label>
            <input type="email" required = "true"></input><br/>
            <label>טלפון</label>
            <input type="tel"></input><br/>
            <button type='submit'>שמור</button>
        </form>
        </>
    )
}

export default SignUp;