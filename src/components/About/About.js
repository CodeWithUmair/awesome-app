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
            Hi, I’am <b>Umair Amir</b>, works as a Front-End Web Developer. I
            've played a lots of games on my Pantium 4 PC😊(yeah, I remember
            those golden / old days🤗)”. My father also taught me the
            fundamentals of Microsoft Office and how to get the best use of a
            computer. Over time, my interest in software development, surfing
            the internet, and, most importantly, problem - solving skills has
            increased.
            <br />
            <br />
            Software development is something that I 'm interested in learning
            more about. As a result, I started self-learning on the internet,
            where I found the best teachers and courses to teach me. My passion
            for web development keeps me motivated to learn more about it and
            hone my skills because it is not job for me. I do have valuable
            skills. This webpage is one of these projects.
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
            on all major browsers.
            <span>
              &nbsp;
              <a
                href="https://www.google.com/search?q=google&sxsrf=ALiCzsbOLiPYt613oJlewMSDJEDZfmCN3Q%3A1653819199218&source=hp&ei=P0eTYqPYC6uJlwShjaVA&iflsig=AJiK0e8AAAAAYpNVT8A25xl0C2WaCYD7RTAyytJ1ENuA&ved=0ahUKEwjj84_PvIT4AhWrxIUKHaFGCQgQ4dUDCAc&uact=5&oq=google&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyEAguELEDEIMBEMcBENEDEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyBwgAELEDEEM6BwgjEOoCECc6BAgAEEM6BAguEEM6BwguENQCEENQ_QZYqg1ggg5oAXAAeACAAYcCiAHvCJIBAzItNZgBAKABAbABCg&sclient=gws-wiz"
                target="_blank"
                rel="noreferrer"
                className="link-styles"
                data-replace="Google"
              >
                <span>Google</span>
              </a>
              , &nbsp;
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="link-styles"
                data-replace="YouTube"
              >
                <span>YouTube</span>
              </a>
              , &nbsp;
              <a
                href="https://www.wikipedia.org/"
                target="_blank"
                rel="noreferrer"
                className="link-styles"
                data-replace="Wikipedia"
              >
                <span>Wikipedia</span>
              </a>
              , &nbsp;
              <a
                href="https://mail.yahoo.com/"
                target="_blank"
                rel="noreferrer"
                className="link-styles"
                data-replace="Yahoo"
              >
                <span>Yahoo</span>
              </a>
              &nbsp; and &nbsp;
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noreferrer"
                className="link-styles"
                data-replace="Twitter"
              >
                <span>Twitter</span>
              </a>
            </span>
            &nbsp; are some of the most popular websites that use JavaScript.
            <br />
            <br />
            &nbsp Our world is quickly moving to technology, and it is my
            responsibility to stay up with it in ways to make things easier. I
            am eciting to work on your projects.
          </p>
          <br />
          <p>
            To Connect with me, this is my email: codewithumair867 @gmail.com
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
