import React from 'react';

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <h2>Personal Information</h2>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            <p>Phone: 123-456-7890</p>

            <h2>Education</h2>
            <p>Bachelor of Science in Computer Science</p>
            <p>University of Example</p>
            <p>Graduation Year: 2022</p>

            <h2>Experience</h2>
            <p>Software Engineer Intern</p>
            <p>ABC Company</p>
            <p>June 2021 - August 2021</p>
            <ul>
                <li>Developed new features for the company's web application</li>
                <li>Collaborated with team members to debug and fix issues</li>
                <li>Participated in code reviews and provided feedback</li>
            </ul>

            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>

            <h2>Resume Link</h2>
            <p><a href="https://example.com/resume.pdf">Download Resume</a></p>
        </div>
    );
}

export default Resume;