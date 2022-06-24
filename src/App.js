import React from "react";
import './App.css';
import './styles.css';
import Education from "./Components/Education";
import General from './Components/General';
import Practical from './Components/Practical';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
          name: "",
          email: "",
          phone: "",
          saved: false,
      },

      education: {
          school: "",
          degree: "",
          year: "",
          saved: false,
      },
      
      practical: {

      }
}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(event) {
    //  form name
    let parentId = event.target.parentElement.id;
    //  field name
    let field = event.target.closest("input").name;
    this.setState((prevState) => (
      {[parentId]: {
          ...prevState[parentId],
          [field]: event.target.value}
      }
      )
    );
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.general)
    
    this.setState({[event.target.id]: {saved: true}});
    // if there are values submitted
    //conditionally render those values as non-editable
  }

  render() {
  return (
    <div className="App">

        <General 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          data = {this.state}
        />
        <Education 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          data = {this.state}
        />
        <Practical 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          data = {this.state}
        />
    </div>
  )
  }

}

export default App;
