import React from "react";
import "../../styles/projects.css"
function Projects() {
    return (
        <div>
            <h2>Projects</h2>
<p>I'm currently working on small but meaningful projects to apply and strengthen my frontend skills. Here's what's coming soon:</p>

<ul className="project_list">
  <li><strong>✅ Portfolio Website</strong> – Built using React, this site itself is my first project!</li>
  <p>to view in github <a href="https://github.com/Violentvicky5/react-portfolio-" target="blank" >click here</a></p>
  <li><strong> 🔧 BMI Calculator</strong> – A simple JavaScript app to calculate Body Mass Index. (Coming soon)</li>
  <li><strong> 🔧 To-do List App</strong> – A task tracker using React and LocalStorage. (Coming soon)</li>
  <li><strong> 🔧 Form Validator</strong> – An HTML/JS form with error messages and input validation. (Coming soon)</li>
</ul>

        </div>
    )
}

export default Projects;