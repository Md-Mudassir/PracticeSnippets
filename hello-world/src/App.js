import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search-box/search.component";

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
  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };
  
  render() {
    const { monsters, searchfield } = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <Search placeholder="search monster" handleChange={this.handleChange} />
        <CardList monsters={filterdMonsters}></CardList>
      </div>
    );
  }
}
export default App;
