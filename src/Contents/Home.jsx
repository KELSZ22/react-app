import Projects from "./Projects.jsx";
function Home(){

    return (
        <div>
            <div className="home-about-container">


                <label htmlFor="">About Me</label>
                
                 <img src="/about.png" alt="about.png" height="220px"/>

                <p>I'm Michael Z. Sabino, a recent computer engineering bachelor's degree graduate, has a strong interest in software development and programming.  I have experience as a full-stack developer from my recent OJT, having worked on a variety of projects utilizing HTML,CSS, Javascript, Java,PHP, Laravel, and other. With  dedication to problem-solving and dedication, I'm looking forward to contribute new ideas and creativity to the tech field.</p>

            </div>



            <div className="projects-container">

             <h1> Projects</h1>

             <div className="projects-card-wrap">

                <div className="projects-card">

                    <img src="about.png" alt="projects.png" height="200px"/>

                    <h4>Web-based Attendance Management System using QR Code</h4>

                    <h5> HTML,CSS,Javascript </h5>


                </div>

                  <div className="projects-card">

                    <img src="about.png" alt="projects.png" height="200px"/>

                    <h4>Web-based Attendance Management System using QR Code</h4>

                    <h5> HTML,CSS,Javascript </h5>


                </div>

                  <div className="projects-card">

                    <img src="about.png" alt="projects.png" height="200px"/>

                    <h4>Web-based Attendance Management System using QR Code</h4>

                    <h5> HTML,CSS,Javascript </h5>


                </div>

                  <div className="projects-card">

                    <img src="about.png" alt="projects.png" height="200px"/>

                    <h4>Web-based Attendance Management System using QR Code</h4>

                    <h5> HTML,CSS,Javascript </h5>


                </div>

            </div>




            </div>


            <div>

                <div className="contacts-container">
                <h1>Contacts</h1>

                <div className="contacts-content">
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.2050919574647!2d120.9630736695074!3d14.609306596862266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca74b8504f5f%3A0x629564a516e4eb37!2s1319%20Abad%20Santos%20St%2C%20Tondo%2C%20Manila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1731127033583!5m2!1sen!2sph"  width="500" height="500px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Address"></iframe></p>
    
                    <div className="contacts-input">

                            <div className="socials">
                                <img src="/fb.png" alt="fb.png" height="50px"/>
                                <img src="/ig.png" alt="ig.png" height="50px"/>
                                <img src="/email.png" alt="email.png" height="50px"/>
                                <img src="/tg.png" alt="tg.png" height="50px"/>
                            </div>
    
                            <label htmlFor="">First Name:</label>
                            <input type="text" />
                            <label htmlFor="">Last Name:</label>
                            <input type="text" />
                            <label htmlFor="">Email:</label>
                            <input type="email" />


                            <label htmlFor="">Message</label>
                            <textarea cols="23" rows="10"/>
    
                            <button>Submit</button>
    
                        </div>
                </div>

                </div>

            </div>


        </div>
    )

}
export default Home