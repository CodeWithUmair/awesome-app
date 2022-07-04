import React, { useEffect } from "react";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    document.title = `Hi Buddy 👍`;
  });

  return (
    <>
      <div className="main_container">
        {/* <p className="p-div">Wellcome to Awesome Collection</p> */}
        <h2 className="main_div" data-text="My...Awesome...Collection!...😉">
          My...Awesome...Collection!...😉
        </h2>
      </div>
    </>
  );
};

export default Home;
