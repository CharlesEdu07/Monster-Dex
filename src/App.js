import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Dudu", lastName: "Udud" },
      company: "Dudu's Company",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Olá {this.state.name.firstName} {this.state.name.lastName}, eu
            trabalho na {this.state.company}
            <br />
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Hally", lastName: "Nosylah" },
                    company: "Pato's Company",
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
