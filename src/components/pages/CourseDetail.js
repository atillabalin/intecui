import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../Service";

const CourseDetail = () => {
    let { id } = useParams();
    useEffect(() => {

        api.courses.get('/' + id)
            .then(res => res.data)
            .then(data => {
                console.log(data)
            })
            .catch(e => {
                if (e.response.status === 404) {
                    window.location = '/'
                }
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h1>Course Detail id: {id}</h1>
        </div>
    )
}

export default CourseDetail;