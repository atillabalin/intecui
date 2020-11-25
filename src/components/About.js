import React, { useContext } from "react";
import { DataContext } from "../DataProvider";

const About =()=>{
   const [state,setState] = useContext(DataContext);
   let settings = state.settings;
    return(
    <div>
        <h1>About</h1>
        {console.log(settings)}
    </div>
    )
}

export default About;