import React, { useState, useEffect } from 'react';

// Exercise 1a
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Initial Name' };
  }

  changeButtonText = () => {
    this.setState((prevProps) => ({ value: 'Changed Name '}));
  }

  render() {
    return (
      // <> to skrót od <React.Fragments>
      <>
        <p>Exercise 1a</p>
        <button onClick={this.changeButtonText}>{this.state.value}</button>
      </>
    )
  }
}

// Exercise 1b
class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Initial text' };
  }

  onInputChange = e => {
    e.persist();
    this.setState(() => ({ value: e.target.value }));
  }
  render() {
    return (
      <>
        <p>Exercise 1b - {this.state.value}</p>
        <input onChange={this.onInputChange} value={this.state.value}/>
      </>
    )
  }
}

// Exercise 2
class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3333/api/pizza')
      .then(r => r.json())
      .then(pizzas => {
        this.setState(() => ({ pizzas }))
      })
  }

  render() {
    return (
      <>
        <p>Exercise 2</p>
        <ul>
          {
            this.state.pizzas.map(pizza => (
            <li key={pizza.id}>Pizza: {pizza.name}, {pizza.price}$</li>
            ))
          }
        </ul>
      </>
    )
  }
}

// Exercise 3 - refactor MyList to hooks
const MyEffectList = props => {

  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/api/pizza')
      .then(r => r.json())
      .then(pizzas => {
        setPizza( pizzas );
      })

  }, [])

  return (
    <>
    <p>Exercise 3 - refactor MyList to hooks</p>
      <ul>
        {
          pizza.map(p => (
          <li key={p.id}>Pizza: {p.name}, {p.price}$</li>
          ))
        }
      </ul>
    </>
  )
}

export class Zajecia2 extends React.Component {
  render() {
    return (
      <>
        <MyButton />
        <MyInput />
        <MyList />
        <MyEffectList />
      </>
    )
  }
}