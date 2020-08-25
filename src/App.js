import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    };
  }

  // TO USE THIS YOU NEED TO CRATE SPECIAL REACT-API APP NOT NORMAL REACT APP SO THIS WON'T WORK
  componentDidMount() {
    // get data from restendpoint
    fetch("https://jsonplaceholder.typicode.com/users")
      // save data in variable res and convert res to json format
      .then((res) => res.json())
      // save formatted data in current state
      .then((json) => {
        this.setState({
          // update isLoaded variable
          isLoaded: true,
          // save data from outside to application
          item: json,
        });
      });
  }

  render() {
    // important to check if loaded
    // because mount method comes AFTER render method (so first time data won't be there yet)

    // map function creates new array with inputted data

    var { isLoaded, item } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <u1>
            {item.map((item) => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.email}
              </li>
            ))}
            ;
          </u1>
        </div>
      );
    }
  }
}

export default App;
