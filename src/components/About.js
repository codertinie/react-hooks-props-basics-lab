import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {props.bio && props.bio.length > 1? <p>{props.bio}</p> : null} 
      {/* the above code checks if bio is > 1 which means a text about bio
      has been entered. if so it returns a paragraph with content of the
      bio entered. otherwise it returns null */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
