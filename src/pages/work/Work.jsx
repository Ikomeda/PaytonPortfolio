import React from 'react';
import { Link } from 'react-router-dom';
import './work.css'

const Work = () => {
  return (
    <section id="projects">
        <div class="project-container">
        <h2 class="project-center">Take a look at some of my work:</h2>
        <div class="pro1">
            <h3 class="text-overlay">Upcoming projects</h3>

        </div>
        <div class="pro2">
            <h3 class="text-overlay">Upcoming projects</h3>
        </div>
        <div class="pro2">
            <h3 class="text-overlay">Upcoming projects</h3>
        </div>
        <div class="pro2">
            <h3 class="text-overlay">Upcoming projects</h3>
        </div>
        <Link to="https://ikomeda.github.io/accessibility-awareness/" target="blank"><section class="pro3">
    
            <div class="access">
                <h3 class="text-overlay">HoriSEOn</h3>
     
            
            </div>
        </section>
        </Link>
    </div>

    </section>
  )
}

export default Work