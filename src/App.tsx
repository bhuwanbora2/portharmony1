import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer /> {/* Footer added here */}
    </div>
  );
}

const Header = () => (
  <header className="header">
    <nav>
      <h1>Bhuwan portfolio</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const HeroSection = () => (
  <section id="home" className="hero">

  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
    <h1 style={{ marginBottom: '0.1rem' }}>Hi, I'm Bhuwan , Full stack MEAN developer</h1>
   
  </section> 
);

const AboutSection = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <p>
     <i>I'm Bhuwan Bora, a passionate frontend developer experienced in Angular, React, Ionic, and backend technologies.
      I enjoy building responsive and user-friendly interfaces.</i> 
    </p>
    <h1 style={{ color: 'black' }}><i>I specialize in delivering end-to-end full-stack web and mobile development solutions tailored to your business needs. Whether you're looking to build a dynamic website, a custom web application, or a mobile platform, I offer expertise in front-end technologies like React, Angular, HTML/CSS, and Ionic, along with back-end and database technologies such as Node.js, PHP, Firebase, and SQL. From concept to deployment, I ensure responsive design, robust functionality, and clean, maintainable code. If you have an idea or a project in mind and need a reliable developer to bring it to life, feel free to reach out. I’m open to freelance and contract opportunities and would be happy to discuss how I can help your vision become reality.</i></h1>
    <p>
      <b>📞 8791377105 </b><br />
      📧 <a href="mailto:bhuwanbora05@gmail.com"><b>bhuwanbora05@gmail.com</b></a> <br />
      🔗 <a href="https://www.linkedin.com/in/bhuwan-bora-278821366/" target="_blank" rel="noreferrer">LinkedIn</a> |
      <a href="https://github.com/bhuwanbora2" target="_blank" rel="noreferrer"> GitHub</a>
    </p>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project-card">
        <img src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/306824/gallery_2.jpg" alt="Buswala" />
        <h3>Buswala</h3>
        <p>Angular, TypeScript, HTML, CSS, NPM, Firebase</p>
        <a href="https://github.com/bhuwanbora2" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <img src="https://etimg.etb2bimg.com/photo/121253568.cms" alt="LPU Messenger" />
        <h3>LPU Messenger</h3>
        <p>Ionic, TypeScript, JavaScript</p>
        <a href="https://github.com/bhuwanbora2" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <img src="https://ideausher.com/wp-content/uploads/2023/12/SuperCook-1024x525.webp" alt="Recipe Review System" />
        <h3>Online Recipe Review System</h3>
        <p>SQL, HTML, PHP, Apache Server</p>
        <a href="https://github.com/bhuwanbora2" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <img src="https://www.karancarrental.com/uploads/Chandigarh_Taxi_Service.webp" alt="Cab Booking System" />
        <h3>Cab Booking System</h3>
        <p>React.js, Node.js</p>
        <a href="https://github.com/bhuwanbora2" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </section>
);


const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };
    let valid = true;

    if (!name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!email || !validateEmail(email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    if (valid) {
      alert('Form submitted (placeholder only)');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2><i>Contact Me for projects</i></h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <span className="error">{errors.message}</span>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Bhuwan Bora — @ project by Harmony Data Integration Technologies</p>
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/bhuwan-bora-278821366/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      |
      <a href="https://github.com/bhuwanbora2" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </footer>
);

export default App;
