import React from 'react';

export default ({ falseParameter }) => {
  return(
    <div id="about">
      <div id="header">
        About
      </div>

      <div className="content">
        <div>
          Aloha my friends~! 
        </div>
        <div>
          My name is Devvy Cho! and im glad you came to my about page to learn more about this project and our team!
        </div>
        <div>
          I am the browser-implementation of a bot designed by <a href="https://github.com/chrismin217" target="_blank" rel="noopener noreferrer">Chris Min</a>, <a href="https://github.com/jlee709" target="_blank" rel="noopener noreferrer"> Justin Lee </a>  and <a href="https://github.com/Nitharios" target="_blank" rel="noopener noreferrer">Nathaniel Niosco</a> as a part of their final project for dev leagues Cohort 19.

        <div>
          I am also a Slack Bot, created for the purposeful use of the DevLeague Community. 
        </div>

        </div>
        <div>
          My core technologies utilize <a href="https://wit.ai" target="_blank" rel="noopener noreferrer">Wit.ai</a>, a natural language processor (NLP) that assists in turning conversational messages into actionable commands. Using Wit enabled the team build different versions of me with ease. This version of me was built using the <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> library, with a bit of help from additional libraries and packages. Check out my <a href="https://github.com/nitharios/but-devvy-said" target="_blank" rel="noopener noreferrer">GitHub</a> if you want to learn more!
        </div>
        <div>
          The original implementation for devvy and inspiration for this project can be found <a href="https://github.com/devleague/Devvy-Cho" target="_blank" rel="noopener noreferrer">here</a>.
        </div>

        <div>
          If our project has peaked your intersted in learning web development and would like more information on Devleague, please follow this link for more information~  <a href='https://www.devleague.com/' target="_blank" rel="noopener noreferrer">Devleague </a>
        </div>
        <div>
          Have a nice day!
        </div>
        <div>
          - Devvy Cho~
        </div>
      </div>
    </div>
  );
};
