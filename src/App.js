import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import FileSearch from "./components/fileSearch";
import "./App.css";
import Axios from 'axios';
import CamundaApi from "./components/camundaApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
      lieferscheinNummer: ""
    };
  }

  // TO USE THIS YOU NEED TO CRATE SPECIAL REACT-API APP NOT NORMAL REACT APP SO THIS WON'T WORK
  componentDidMount() {
/*      // get data from restendpoint
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
      });  */
  }

  test = () => {
    const lsn = this.state.lieferscheinNummer;
    alert("You entered: " + lsn);
  }

  setLieferscheinNummer = (lsNummer) => {
    let lieferscheinNummer = [...this.state.lieferscheinNummer];
    lieferscheinNummer = lsNummer;
    this.setState({ lieferscheinNummer});
  }

  render() {
    // important to check if loaded
    // because mount method comes AFTER render method (so first time data won't be there yet)

    // map function creates new array with inputted data

    //var { isLoaded, item } = this.state;

/*     if (!isLoaded) {
      return <div>Loading...</div>;
    } else { */
      Axios({
        method: "GET",
        url: "http://localhost:5000/",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        console.log(res.data.message);
      });
      return (
        <div className="test">
          <NavBar />
          <FileSearch type="Lieferschein" test={this.test} setLieferscheinNummer={this.setLieferscheinNummer}/>
          <Footer />
        </div>
      );
    }
  // }
}

export default App;
