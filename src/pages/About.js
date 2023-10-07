import react from 'react'
import myImg from '../resources/myImage.jpeg';
import './About.css'
function About() {
    return (
        <div className="about-container">
            <div className="my-image-container">
                <img src={myImg} alt="Profile Image" className='my-image'></img>
            </div>
            <div className='my-desc-container'>
                <p className='my-desc'>
                    Hello! I am a passionate computer science student with a knack for problem-solving and a love for technology. Allow me to share a little more about myself.
                </p>
                <p className='my-desc'>I am currently pursuing my degree in Computer Science, where I have been delving deep into the world of programming and software development. Proficient in languages like C/C++, Java, and Python, I have honed my skills in creating efficient and elegant solutions to complex problems. My knowledge extends to data structures and algorithms, which I consider the building blocks of innovative software solutions. Whether it's optimizing algorithms or designing data structures, I thrive on finding elegant solutions to challenging problems.
                </p>
                <p className='my-desc'>Beyond my academic pursuits, I am proud to be a Postman Certified Student Expert. This certification reflects my commitment to staying on the cutting edge of industry tools and best practices, even as a student. It's a testament to my dedication to continuous learning and excellence in problem-solving.
                </p>
                <p className='my-desc'>But my skills and interests don't stop at algorithms and coding. I am also well-versed in frontend development technologies like HTML, CSS, and JavaScript. Currently, I am immersing myself in the world of React to build dynamic and interactive user interfaces. This frontend knowledge allows me to bridge the gap between design and functionality, creating seamless user experiences.
                </p>
                <p className='my-desc'>On the backend, I have a strong foundation in database management systems (DBMS) and SQL, allowing me to design robust data-driven applications. I am proficient in backend technologies like Node.js and Express.js, which empower me to build scalable and high-performance server-side applications.
                </p>
                <p className='my-desc'>In addition to coding and technology, I have a strong affinity for yoga, chess, and basketball. Yoga has taught me discipline and mindfulness, which I apply to my problem-solving skills in the world of technology. Chess challenges my strategic thinking, while basketball keeps me active and engaged in a team sport. Both activities serve as a perfect balance to the cerebral world of coding.
                </p>
                <p className='my-desc'>As I continue on my journey in computer science, I am excited to apply my diverse skill set to real-world challenges and create solutions that have a meaningful impact. Thank you for visiting my portfolio website. Feel free to explore my projects and accomplishments, and don't hesitate to get in touch if you'd like to connect or collaborate. Let's create amazing things together!</p>
            </div>
        </div>
    );
}
export default About;