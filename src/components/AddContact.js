import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.number === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", number: "" });
  };
  render() {
    
    return (
    <div className="container" >
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Number</label>
            <input
              type="number"
              name="number"
              placeholder="Number"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>
          <button className="ui button dark grey">Add</button>
        </form>
      </div>
      </div>
    );
  }
}

export default AddContact;
