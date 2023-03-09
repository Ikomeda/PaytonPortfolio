import React from 'react'
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import './footer.css';

const Footer = () => {
    return (
        <footer className="icons">
            <Link to='https://github.com/Ikomeda' target="_blank"><AiFillGithub /></Link>
            <Link to='https://www.linkedin.com/in/payton-parker-1765a1252/' target="_blank"><AiFillLinkedin /></Link>
        </footer>
    )
}

export default Footer