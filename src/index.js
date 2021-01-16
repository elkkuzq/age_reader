import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
   const name = props.name
   const vuosiluku = props.vuosiluku
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
  const nimi = 'javascript'
  const vuosiluku = 1995

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={nimi} vuosiluku={vuosiluku} />
      <Hello name={'ELY'} vuosiluku={2006} />
    </div>
  )
}


ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
