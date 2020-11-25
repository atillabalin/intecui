import React, { useContext } from "react";
import { DataContext } from "../DataProvider";
import {CoursePageHeader,CoursesBlocks} from "./CoursesBlocks";

const Courses =()=>{
    const [state,setState] = useContext(DataContext);
    const courses = state.courses;
    return(
    <div>
        {console.log(courses)}
        <CoursePageHeader/>
        
    </div>
    )
}

export default Courses;