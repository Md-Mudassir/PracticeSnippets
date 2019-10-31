import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 2,
          name: "Mohammed"
        },
        {
          id: 3,
          name: "Mudassir"
        }
      ]
    };
  }

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users));

  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>
            {monster.name},{monster.id}
          </h1>
        ))}
      </div>
    );
  }
}
export default App;
