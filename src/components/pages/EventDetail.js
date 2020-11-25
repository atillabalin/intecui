import React from "react";
import { useParams } from "react-router-dom";

const EventDetail =()=>{
    let { id } = useParams();
    return(
    <div>
        <h1>EventDetail id: {id}</h1>
    </div>
    )
}

export default EventDetail;