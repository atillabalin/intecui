import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import {FaFacebookF,FaTwitterSquare,FaLinkedin,FaInstagram} from 'react-icons/fa'
const SocialLinks = ()=>{
    return (
        <Jumbotron className="text-center">
            <p className="lead">Volg ons de klok rond</p>
            <h2>
            <FaFacebookF/>
            <FaTwitterSquare/>
            <FaLinkedin/>
            <FaInstagram/>
            </h2>
        </Jumbotron>
    )
}
export default SocialLinks;