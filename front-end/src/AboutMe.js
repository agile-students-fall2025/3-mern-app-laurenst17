
  import { Link } from 'react-router-dom'
  import './Message.css'
  import React from 'react';

  
  /**
   * A React component that represents one Message in the list of messages.
   * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
   * @returns The contents of this component, in JSX form.
   */



  const AboutMe = props => {
    return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>
      Hi my name is Lauren and I’m from New Jersey.  I love meeting people, some of my favorite chatting with my friends at a cafe or sitting in Washington Square Park and just people watching.  Also I’m a big foodie, I love trying new food from different cultures and experimenting new restaurants and even though I love foodie, I’m a horrible chef and a mediocre baker at best; but I am the best guest. I enjoy working out at the gym and I also do martial arts.
      </p>
    </div>
  );
};

export default AboutMe;

  