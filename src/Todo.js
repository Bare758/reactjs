import React, { Component } from "react";
import propTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    return (
      <div style={this.getStyle()}>
        {this.props.todoProp.title}
        <button style={buttonStyle}>x</button>

        <input
          type="checkbox"
          onChange={this.props.markCompleteProp2.bind(
            this,
            this.props.todoProp.id
          )}
        ></input>
      </div>
    );
  }
}

const buttonStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "#none",
  padding: "5px , 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

Todo.propTypes = {
  todoProp: propTypes.object.isRequired,
};

export default Todo;
