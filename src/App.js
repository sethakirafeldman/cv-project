import React from "react";
import './App.css';
import './styles.css';
import Education from "./Components/Education";
import General from './Components/General';
import Practical from './Components/Practical';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange() {
    console.log();
  }

  handleSubmit() {
    console.log(`submit`);
  }

  render() {
  return (
    <div className="App">
        <Education 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
        />
        <General />
        <Practical />
    </div>
  )
  }

}

export default App;
