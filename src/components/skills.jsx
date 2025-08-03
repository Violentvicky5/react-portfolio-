import React from "react";
import "../../styles/skills.css"
function Skills() {
    return (
        <div className="skills_main">
            <h2>💻 Frontend Development</h2>
            <ul className="fr_dev">
                <li>HTML5 - Semantic structure and best practices</li>
                <li>CSS3 - Responsive layouts, Flexbox, Grid, media queries, animations</li>
                <li>JavaScript – DOM, events, conditions, loops, functions, destructuring, JSON, etc.</li>
                <li>React.js Components, props, JSX, project structure, basic hooks (like useState)</li>
                <li>Responsive Design Mobile-first design, accessibility practices</li>
                <li>styling and UI - bootstrap</li>
            </ul>
            <hr />
            <h2>⚙️ Backend Development</h2>
            <ul className="back_dev">
                <li>Node.js – Server creation, routing, request handling</li>
                <li>Express.js – REST APIs, middleware, routing</li>
                <li>PostgreSQL – CRUD operations, table design</li>
                <li>Authentication – Basic auth logic</li>
                <li>REST API Concepts – GET, POST, PUT, DELETE endpoints</li>
                <li>Basic Deployment – Local server testing, planning full deployment</li>
            </ul>
            <hr />
            <h2>🛠️ Tools & Platforms</h2>
            <ul className="tools_platforms">
                <li>Git & GitHub – Version control, uploading projects</li>
                <li>VS Code – Main editor</li>
                <li>Chrome DevTools – Debugging frontend</li>
                <li>Postman – API testing </li>
            </ul>
            <hr />
            <h2>🌟 Other Skills And Experience</h2>
            <ul className="skills_experience">
                <li>Real-world experience (Sales Executive role – Buzzworks Pvt Ltd)</li>
                <li>Strong communication in Tamil, Malayalam, and English</li>
                <li>Passion for learning, travel, and solving real problems with code</li>
                <li>Self-motivated learner with proven consistency</li>
                <li></li>   
            </ul>  
            <hr />
              <li><p><a href="course_certificate.pdf" download>click here : </a>to download My Udemy- Full Stack Development course completion certificate</p></li>    
                <li><p><a href="_vigneshravichandran_dev.pdf" download>click here : </a>to download My Resume.</p></li>    
       
        </div>
    )
}

export default Skills;