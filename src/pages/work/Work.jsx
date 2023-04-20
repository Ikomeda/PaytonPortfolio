import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import './work.css'

const Work = () => {
  return (
      <section id="projects">
        <div class="project-container">
        {/* <h2 class="project-center">Take a look at some of my work:</h2> */}
        {/* <div class="pro1">
            <h3 class="text-overlay">Upcoming projects</h3>

        </div> */}
        <section class="pro1">
            <div class="access">
            <h3><Link to="http://localhost:3000/PaytonPortfolio" target="blank" class="text-overlay">My Portfolio</Link><Link to="https://github.com/Ikomeda/PaytonPortfolio" target="blank" class="text-overlay"><AiFillGithub /></Link></h3>
     
            
            </div>
        </section>
        <section class="pro2">                  
            <div class="access">
            <h3><Link to="https://drive.google.com/file/d/1Le3dydQIHsIKef84ZE_o6BDOOcbgf8vp/view" target="blank" class="text-overlay">Employee Tracker</Link><Link to="https://github.com/Ikomeda/trackmyemps" target="blank" class="text-overlay"><AiFillGithub /></Link></h3>
     
            
            </div>
        </section>
        <section class="pro3">
    
            <div class="access">
            <h3><Link to="https://drive.google.com/file/d/1WZ3oo803c7ii-lPSPw-rQvaRaDyNhA0X/view" target="blank" class="text-overlay">Ecommerce Backend</Link><Link to="https://github.com/Ikomeda/e_commerce" target="blank" class="text-overlay"><AiFillGithub /></Link></h3>
          
            </div>
        </section>
        <section class="pro4">
            <div class="access">
            <h3><Link to="https://ikomeda.github.io/The-Date-a-base/" target="blank" class="text-overlay">The Date-A-Base</Link><Link to="https://github.com/Ikomeda/The-Date-a-base" target="blank" class="text-overlay"><AiFillGithub /></Link></h3>
     
            
            </div>
        </section>
    </div>

    </section>
  )
}

export default Work