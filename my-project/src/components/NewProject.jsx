// import Checkbox from '/lib/checkbox/Checkbox';
import { Checkbox } from 'antd';
import React from 'react';

const NewProject = () => {
    // להעביר לקונטקס!!!!
    const ourTypes = ['נצור לשונך', 'תהילים', 'זוהר', 'משניות', 'ש"ס',];
    const goal = ['לעילוי נשמת', 'לרפואה', 'להצלחה', 'לזיווג הגון', 'לזרע של קיימא', 'למטרה אחרת']
    return (
        <div>
            <h1>new Project!</h1>
            <form>
                <label>הכנס שם לפרויקט!!!</label>
                <input placeholder='project name'></input> <br />
                <label>מה ברצונכם ללמוד?</label>
                <select>
                    {ourTypes.map(t => <option>{t}</option>)}
                </select><br />
                <label>מטרת הלימוד</label>
                <select>
                    {goal.map(t => <option>{t}</option>)}
                </select><br></br>
                <label>הלימוד לזכות</label><input></input><br></br>
                <label>תאריך יעד</label><input type="date" />
                <br></br>
                <label >האם ברצונך לאפשר ללימוד להיות ציבורי?</label>
                <input type='checkbox'></input>
                <br></br>
                <label>הכנס את המילים של חברי הקבוצה</label><input type="email"></input><br/>
                <button type='submit'>שמור</button>
            </form>
        </div>
    )
}

export default NewProject;