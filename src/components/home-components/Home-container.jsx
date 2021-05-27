import React, { useState, useEffect, useRef } from "react";
import profilePic from "../../images/FB_IMG_1606709804001 (2).jpg"

function HomeComponent() {

  let [description, setDescription] = useState("Hi my name is Whoong Zi Wei!");
  let randomQuotes = ['My career goal is to one day become a data analyst!','Data, data, data! I can\'t build bricks without data!', 'I am currently a Computer Science student in Taylor\'s university.', 'This website is built with React!']
  let random = Math.floor(Math.random() * randomQuotes.length)

  useInterval(() => {
    // Your custom logic here
    setDescription(randomQuotes[random])
  }, 5000);

  return (
    <div className="container">
      <div className="valign-wrapper">
        <div className="row">
          <img className="pic circle responsive-img" src={profilePic} alt="prof-pic"></img>
        </div>
      </div>

      <h1 className="center description">{description}</h1>
    
    </div>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default HomeComponent;






