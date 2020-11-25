import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Particles from 'react-particles-js';

const CoursePageHeader = () => {
    return (
        <Jumbotron className="mt-1 mb-1 p-2 CoursePageHeader bg-dark text-center " fluid={true}>
            <p className="display-4 text-white position-absolute opleidingentitle">OPLEIDINGEN</p>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 2
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                height={100}
                />
            
            
        </Jumbotron>
    )
}




const CoursesBody = () => {
    return (
        <div>

        </div>
    )
}

export { CoursePageHeader, CoursesBody };