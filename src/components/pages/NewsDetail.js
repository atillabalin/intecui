import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail =()=>{
    let { id } = useParams();
    return(
    <div>
        <h1>NewsDetail id: {id}</h1>
    </div>
    )
}

export default NewsDetail;