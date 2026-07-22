function App() {

  return (
    <div id="resume">
    <Heading />
    <Objective />
    <Education />
    <Skills />
    </div>
  )
}

function Heading() {
    return (
        <div>
            <h2>John Doe</h2>
            <p>Email: john.email@example.com | Phone: +1-234-567-8900 | LinkedIn: linkedin.com/in/username</p>
            <hr/>
        </div>
    )
}

function Objective() {
    return (
        <div>
            <h3>1. Objectives</h3>
            <p>Passionate and detail-oriented professional 
                seeking to leverage strong foundational skills 
                in a dynamic role. Eager to contribute to team 
                success through continuous learning, adaptability, 
                and a dedicated work ethic.</p>
        </div>
    );
}

function Education() {
    return (
        <div id="education">
            <h3>2. Education</h3>
            <ul>
                <li>B.Sc. degree in XYZ – ABC University, 2002</li>
                <li>High School Diploma / Relevant Certification – XYZ SChool, 1999</li>
            </ul>
        </div>
    )
}

function Skills() {
    return (
        <div id="skills">
            <h3>3. Skills</h3>
            <ul>
                <li>Technical Skills: Skill A, Skill B, Skill C, Skill D</li>
                <li>Core Competencies: Problem-solving, effective communication, time management</li>
                <li>Tools & Technologies: Tool X, Tool Y, Tool Z</li>
            </ul>
        </div>
    )
}

export default App
