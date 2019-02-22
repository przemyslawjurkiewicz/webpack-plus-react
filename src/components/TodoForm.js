import React from 'react';
import style from './TodoForm.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value) {
      this.props.add(this.state.value);
      this.state.value ='';
    } else {
      alert('Enter Task tekst');
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.Form}>
        <input
          type="text"
          placeholder="Insert Task"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
