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
          phone: null,
      },

      education: {
          school: "",
          degree: "",
          year: "",
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
    
    this.setState({[parentId]: {[field]: event.target.value}});

    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`submit`);
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
