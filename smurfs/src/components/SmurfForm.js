import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
  state = {
    newSmurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  submitSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
  };

  handleInputChange = event => {
    event.persist();
    this.setState(prevState => ({
      ...this.state,
      newSmurf: {
        ...prevState.newSmurf,
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.newSmurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.newSmurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.newSmurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
