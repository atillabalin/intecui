import React, { useContext } from "react";
import { DataContext } from "../DataProvider";

const News =()=>{
   const [state,setState] = useContext(DataContext);
    return(
    <div>
        <h1>News</h1>
        {console.log(state.news)}
    </div>
    )
}

export default News;