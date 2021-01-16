import React, { Component } from "react";
import Search from "./components/Search";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Search
          suggestions={["Anshu", "Anshuman", "Kulkarni", "Ram", "shyam", "Krishna"]}
        />
      </div>
    );
  }
}

export default App;
