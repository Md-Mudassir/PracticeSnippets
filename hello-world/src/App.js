import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: ""
    };
  }

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search"
          onChange={e => this.state({ searchfield: e.target.value })}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}
export default App;
