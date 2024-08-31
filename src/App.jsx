import React from "react";
import './App.css';
import './App.js';
import avthar from '../public/por1.png'
import profile from '../public/prof.jpeg'
import whatsapp from '../public/whatsapp.png'
import insta from '../public/insta.png'
import facebook from '../public/fb.png'
import github from '../public/GitHub.png'

const App = () => {
  const closeCookies = () => {
    document.getElementById("cookies").style.display = "none";
  };

  const toggleMobileNav = () => {
    document.getElementById("menu-list").classList.toggle("open");
  };

  const hideMobileNav = () => {
    document.getElementById("menu-list").classList.remove("open");
  };

  const closeMenu = () => {
    document.getElementById("menu-icon-opened").classList.toggle("closed");
  };

  return (
    <>
      
      <div id="landing">
        <nav id="mobile-navbar" className="snow-white-back">
          <div id="menu-icon" onClick={toggleMobileNav}>
            <div id="disappear" className="bar dark-blue-back"></div>
            <div className="bar dark-blue-back"></div>
            <div className="dark-blue-back"></div>
            <div id="menu-icon-opened" onClick={closeMenu}>
              <div className="rotate-one bar dark-blue-back"></div>
              <div className="rotate-two bar dark-blue-back"></div>
            </div>
          </div>

          <ul id="menu-list">
            <li className="snow-white-back">
              <a href="#" className="home-button" onClick={hideMobileNav}>
                Home
              </a>
            </li>
            <li className="snow-white-back">
              <a href="#about" onClick={hideMobileNav}>
                About
              </a>
            </li>
            <li className="snow-white-back">
              <a href="#highlights" onClick={hideMobileNav}>
                Highlights
              </a>
            </li>
            <li className="snow-white-back">
              <a href="#myproject" onClick={hideMobileNav}>
                myproject
              </a>
            </li>
            <li className="snow-white-back">
              <a href="#contact" onClick={hideMobileNav}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

       
        <main className="title">
          <div className="container">
            <div className="name">
              <h1 className="dark-blue">Aromal Sukumar</h1>
              <h2 className="warm-sand">web developer</h2>
            </div>
            <img
              className="logo"src={avthar}/>
          </div>
        </main>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav id="desktop-navbar" className="snow-white-back">
        <ul className="main-nav">
          <li>
            <a className="home-button" href="#">
              HOME
            </a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#highlights">HIGHLIGHTS</a>
          </li>
          <li>
            <a href="#myproject">myproject</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* ABOUT PAGE */}
      <section id="about" className="snow-white-back">
        <div className="space-between"></div>

        <h3 className="snow-white header dark-blue">
          "I used to write stories, now I write code"
        </h3>

        <div className="information-box">
          <div className="text left">
            <img id="profile-photo" src={profile} alt="Aromal Sukumar"
            />
            <ul className="description-desktop">
              <li>
                <span className="dark-blue">AROMAL SUKUMAR</span>
              </li>
              <li>
                <span className="warm-sand">Mern Stack Developer & Python Developer</span>
              </li>
            </ul>
          </div>

          <div className="text right">
            <ul className="description-mobile">
              <li>
                <span className="dark-blue">Aromal Sukumar</span>
              </li>
              <li>
                <span className="warm-sand">Mern Stack Developer & Python Developer </span>
              </li>
            </ul>
            <p> I'm an MERN Stack Developer & Python Developer</p>
            <p>
            I completed my diploma in electronic engineerig, My high secondary in computer science
            </p>
            <p>
            Now am learning my web developing carrer in synefo solutions kochi
            </p>
            <p>
              After some successful experiences in electronic engineerig, I committed
              myself to changing my career and become a web developer, a desire
              I had been following for a long time.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS PAGE */}
      <section id="highlights" className="warm-sand-back">
        <div className="space-between"></div>

        <h3 className="snow-white header">
          how <span className="dark-blue">code</span> I help you?
        </h3>

        <article className="wrapper">
          <p className="snow-white">
          This are the languages i use for coding. This helps me to make my coding easyer 
          </p>

          <ul className="skills">
            <li>
              <img
                className="icon"
                src="https://res.cloudinary.com/jimbocloud/image/upload/v1561811102/Portfolio/html5-icon.png"
                alt="HTML5"
              />
              HTML5
            </li>
            <li>
              <img className="icon"src="https://res.cloudinary.com/jimbocloud/image/upload/v1561811102/Portfolio/css3-icon.png"alt="CSS3"/>
              CSS
            </li>
            <li>
              <img className="icon-construction icon" src="https://res.cloudinary.com/jimbocloud/image/upload/v1561811102/Portfolio/js-icon.png" alt="JavaScript"/>
              JavaScript
            </li>
          </ul>
          <ul className="skills">
            <li>
              <img className="icon-construction icon" src="https://res.cloudinary.com/jimbocloud/image/upload/v1561811103/Portfolio/react-icon.png" alt="React"/>
              React
            </li>
            <li>
              <img className="icon-construction icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png" alt="PYTHON" />
              PYTHON
            </li>
            <li>
              <img className="icon-construction icon" src="https://res.cloudinary.com/jimbocloud/image/upload/v1561811103/Portfolio/mongodb-icon.png" alt="MongoDB"/>
              MongoDB
            </li>

          </ul>
        
          
        </article>
      </section>

      {/* MY PROJECTS  */}
      <section id="myproject" className="white-coco-back">
        <div className="space-between"></div>

        <h2 className="dark-blue header">My Project</h2>

        <section className="opinions">
          <article>
            
            <div className="project">
              < a  href="https://github.com/Aromalsukumar/BookMyShow.git">
              <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"alt="BookMyShow"/>
              </a>
            </div>
            <div className="info-project">
              <h2>Book My Show</h2>
            </div>
          </article>

          <article>
            <div className="project">
              <a href="https://github.com/Aromalsukumar/odin-project.git">
              <img src="https://miro.medium.com/max/1400/1*chhKo9KEel7n7hi0O_cEPA.png"alt="the odin"/>
              </a>
            </div>
            <div className="info-project">
              <h2>The Odin Project</h2>
            </div>
          </article>
        </section>
      </section>

      {/* CONTACT PAGE */}
      <section id="contact" className="dark-blue-back">
      <div className="space-between"></div>

      <h3 className="snow-white header snow-white">Get in Touch</h3>

      <div className="wrapper form">
        <p className="text-form snow-white">
          If you like what you have seen so far or you want to know more about me and my work, do not hesitate on contacting me.
          <br /><br />
          <strong>My door is always open to new projects, collaborations, and challenges</strong>.
          <br /><br />
          Don't be shy and knock it.
        </p>
        <form className="contact-form" action="contact">
          <p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
              required
            />
          </p>
          <p>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              required
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              required
            />
          </p>
          <p>
            <textarea
              name="message"
              placeholder="Write your message here"
              rows="10"
              cols="30"
              className="input"
              required
            ></textarea>
          </p>
          <p>
            <input
              type="submit"
              className="submit dark-blue-back snow-white icon"
              value="Send"
            />
          </p>
        </form>
      </div>
    </section>

      {/* FOOTER */}
      <footer>
      <div className="social-icons">
        <a className="icon"href="https://www.instagram.com/arom_al26?igsh=MWpmMDl0dnNxNHYx">
          <img src={insta} alt="insta"/>
        </a>
        <a className="icon" href="">
          <img src={whatsapp} alt="Whatsapp"/>
        </a>
        <a className="icon" href="https://github.com/Aromalsukumar">
          <img src={github} alt="GitHub" />
        </a>
        <a className="icon" href="">
          <img src={facebook} alt="Facebook" />
        </a>
        
      </div>
    </footer>
    </>
  );
};

export default App;
