import React from 'react';
import Footer from './Footer';

function Portfolio() {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='container'>
        <div className='section-heading'>
          <h1>Portfolio</h1>
          <h6>My recent work</h6>
        </div>
        <div
          className='portfolio-item'
          data-aos='fade-right'
          data-aos-offset={300}
          data-aos-easing='ease-in-sine'>
          <div className='portfolio-img has-margin-right'>
            <img src='assets/Images/password-gen.png' alt='' />
          </div>
          <div className='portfolio-description'>
            <h6>Web Application</h6>
            <h1>Password Generator</h1>
            <p>
              When working at almost any job you want your employee's to have a
              secure password for their day to day activities. Here is my
              application to secure their logins.
            </p>
            <a
              href='https://zachbach.github.io/Password-Generator/'
              className='cta'>
              View Application
            </a>
            <br />
            <a
              href='https://github.com/ZachBach/Password-Generator'
              className='cta'>
              View Code
            </a>
          </div>
        </div>
        <div
          className='portfolio-item'
          data-aos='fade-left'
          data-aos-offset={300}
          data-aos-easing='ease-in-sine'>
          <div className='portfolio-description has-margin-right'>
            <h6>Web Application</h6>
            <h1>Work Day Planner</h1>
            <p>
              At a job it's always good to have your work day planned out. Here
              i have just a simple Day-Planner to help you schedule meetings,
              conference's, events.
            </p>
            <a href='https://zachbach.github.io/Day_Planner/' className='cta'>
              View Application
            </a>
            <br />
            <a href='https://github.com/ZachBach/Day_Planner' className='cta'>
              View Code
            </a>
          </div>
          <div className='portfolio-img'>
            <img src='assets/Images/Day-planner.png' alt='' />
          </div>
        </div>
        <div
          className='portfolio-item'
          data-aos='fade-right'
          data-aos-offset={300}
          data-aos-easing='ease-in-sine'>
          <div className='portfolio-img has-margin-right'>
            <img src='assets/Images/weather-dashboard.png' alt='' />
          </div>
          <div className='portfolio-description'>
            <h6>Web Application</h6>
            <h1>Weather Dashboard</h1>
            <p>
              Get the current weather anywhere in the world, or wherever you
              are. Gives you a five day forecast. It stores each of your
              previous searches so you can click back to check multiple cities.
            </p>
            <a
              href='https://zachbach.github.io/Weather-Dashboard/'
              className='cta'>
              View Application
            </a>
            <br />
            <a
              href='https://github.com/ZachBach/Weather-Dashboard'
              className='cta'>
              View Code
            </a>
          </div>
        </div>
        <div
          className='portfolio-item'
          data-aos='fade-left'
          data-aos-offset={300}
          data-aos-easing='ease-in-sine'>
          <div className='portfolio-description has-margin-right'>
            <h6>Web Application</h6>
            <h1>Group Project</h1>
            <p>
              Worked toghether with a team of 3 individuals. We created a
              Application that based upon the weather, it will display three
              events in the city that you searched for the weather.
            </p>
            <a href='https://mchisem.github.io/Weather-or-Not/' className='cta'>
              View Application
            </a>
            <br />
            <a href='https://github.com/mchisem/Weather-or-Not' className='cta'>
              View Code
            </a>
          </div>
          <div className='portfolio-img'>
            <img src='assets/Images/Project-One.png' alt='' />
          </div>
        </div>
        <div
          className='portfolio-item'
          data-aos='fade-right'
          data-aos-offset={300}
          data-aos-easing='ease-in-sine'>
          <div className='portfolio-img has-margin-right'>
            <img src='assets/Images/BurgAppImage.png' alt='' />
          </div>
          <div className='portfolio-description'>
            <h6>MVC Project</h6>
            <h1>Eat Da Burger Application</h1>
            <p>
              Eat Da Burger is a restaurant app that lets user input the names
              of burgers they'd like to eat. Whenever a user submits a burger's
              name, your app will display the burger on the left side of the
              page. Each burger in the waiting area also has a Devour it button.
              When the user clicks it, the burger will move to the right side of
              the page.
            </p>
            <a href='https://eatdaburger2020.herokuapp.com/' className='cta'>
              View Application
            </a>
            <br />
            <a href='https://github.com/ZachBach/Burger' className='cta'>
              View Code
            </a>
          </div>
        </div>
        <div
          className='portfolio-item'
          data-aos='fade-left'
          data-aos-offset={300}
          data-aos-easing='ease-in-sine'>
          <div className='portfolio-description has-margin-right'>
            <h6>Web Application</h6>
            <h1>Group Project</h1>
            <p>
              Worked toghether with a team of 3 individuals. We created a
              Application using Passport, Node.js, express, and API's. Enter in
              a drink you have in your house and it will give you a whole array
              of drinks to try!!
            </p>
            <a
              href='https://guarded-everglades-88887.herokuapp.com/'
              className='cta'>
              View Application
            </a>
            <br />
            <a href='https://github.com/blu19/Quarantini' className='cta'>
              View Code
            </a>
          </div>
          <div className='portfolio-img'>
            {/* <div class="wistia_embed wistia_async_27huc7j883" style="height:420px;position:relative;width:640px"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/27huc7j883/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div>
                              <img src="https://fast.wistia.com/embed/medias/27huc7j883.jsonp" alt=""> */}
            <video
              controls
              autoPlay
              loop
              src='assets/Images/Quarantini.mp4'
              style={{ height: '420px', position: 'relative', width: '640px' }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Portfolio;
