import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, vuosiluku}) => {
  const BornYear = () => new Date().getFullYear() - vuosiluku
  return (
    <div>
      <p>
        Hello {name}, you born {vuosiluku}.
      </p>
      <p>so you are {BornYear()} years old.</p>
    </div>
  )
}


const App = () => {
  const javascript = {
  nimi: 'javascript', vuosiluku: 1995
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={javascript.nimi} vuosiluku={javascript.vuosiluku} />
    </div>
  )
}


ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
