import React, { useContext } from "react";
import { DataContext } from "../DataProvider";

const Jobs =()=>{
    const [state,setState] = useContext(DataContext);
    return(
    <div>
        <h1>Jobs  </h1>
    </div>
    )
}

export default Jobs;