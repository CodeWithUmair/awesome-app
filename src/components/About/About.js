/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./About.scss";
import { FaFreeCodeCamp, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    document.title = `About me 👀`;
  });
  return (
    <>
      <div id="about">
        <header className="header">
          <p> About me.😊 </p>
        </header>
        <article className="article">
          <p>
            Hi, I’am <b>Umair Amir</b>, works as a Front-End Web Developer. My
            interest in learning more about web programming is growing. As a
            result, I started learning on my own online, where I was able to
            find the best instructors and courses. Because web development is my
            passion and not my work, I am constantly inspired to learn more and
            improve my skills. Yes, I do have useful abilities. One of these
            initiatives is this website. My father also taught me the
            fundamentals of Microsoft Office and how to get the best use of a
            computer. Over time, my interest in software development, surfing
            the internet, and, most importantly, problem - solving skills has
            increased.
            <br />
            <br />
            My current technology stack is MERN Stack and that is nothing
            but&nbsp;&nbsp;
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="MongoDB"
            >
              <span>MongoDB</span>
            </a>
            &nbsp; , &nbsp;
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="Express.js"
            >
              <span>Express.js</span>
            </a>
            &nbsp; , &nbsp;
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="React.js"
            >
              <span>React.js</span>
            </a>
            &nbsp; , &nbsp;
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="Node.js"
            >
              <span>Node.js</span>
            </a>
            &nbsp;&nbsp;It is designed to make the development process smoother
            and easier. Each of these 4 powerful technologies provides an
            end-to-end framework for the developers to work in and each of these
            technologies play a big part in the development of web applications.
            <br />
            <br />I started with learning HTML, CSS, and Bootstrap, and after
            mastering these technologies, I progressed to the programming
            language JavaScript.One of the most popular programming languages
            for online and mobile app development is JavaScript. To make web
            sites more interactive, the object - oriented scripting language is
            utilised.Both frontend and backend development may be done with
            JavaScript.Furthermore, the scripting language 's source code can be
            run directly. JavaScript is used to create interactive elements such
            as clickable buttons and images that can zoom in and out. Beginners
            will find the language to be reasonably simple to grasp, and it runs
            on all major browsers.&nbsp;&nbsp;
            <a
              href="https://www.google.com/search?q=google&sxsrf=ALiCzsbOLiPYt613oJlewMSDJEDZfmCN3Q%3A1653819199218&source=hp&ei=P0eTYqPYC6uJlwShjaVA&iflsig=AJiK0e8AAAAAYpNVT8A25xl0C2WaCYD7RTAyytJ1ENuA&ved=0ahUKEwjj84_PvIT4AhWrxIUKHaFGCQgQ4dUDCAc&uact=5&oq=google&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyEAguELEDEIMBEMcBENEDEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyBwgAELEDEEM6BwgjEOoCECc6BAgAEEM6BAguEEM6BwguENQCEENQ_QZYqg1ggg5oAXAAeACAAYcCiAHvCJIBAzItNZgBAKABAbABCg&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="Google"
            >
              <span>Google</span>
            </a>
            &nbsp;,&nbsp;
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="YouTube"
            >
              <span>YouTube</span>
            </a>
            &nbsp;,&nbsp;
            <a
              href="https://www.wikipedia.org/"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="Wikipedia"
            >
              <span>Wikipedia</span>
            </a>
            &nbsp;,&nbsp;
            <a
              href="https://mail.yahoo.com/"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="Yahoo"
            >
              <span>Yahoo</span>
            </a>
            &nbsp;,&nbsp;
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="Twitter"
            >
              <span>Twitter</span>
            </a>
            &nbsp; are some of the most popular websites that use JavaScript.
            <br />
            <br />
            Our world is quickly moving to technology, and it is my
            responsibility to stay up with it in ways to make things easier. I
            am eciting to work on your projects.
          </p>
          <br />
          <p>
            To Connect with me, this is my email &#8594; &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              className="link-styles"
              data-replace="codewithumair867@gmail.com"
            >
              <span>codewithumair867@gmail.com</span>
            </a>
          </p>
        </article>
        <footer>
          <a
            href="https://www.freecodecamp.org/codewithumair"
            target="_blank"
            rel="noreferrer"
            className="link-footer"
          >
            <FaFreeCodeCamp />
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a
            href="https://github.com/CodeWithUmair"
            target="_blank"
            rel="noreferrer"
            className="link-footer"
          >
            <FaGithub />
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a
            href="https://www.linkedin.com/in/umair-amir-30b32721a/"
            target="_blank"
            rel="noreferrer"
            className="link-footer"
          >
            <FaLinkedin />
          </a>
        </footer>
      </div>
    </>
  );
};

export default About;
