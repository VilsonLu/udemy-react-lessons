import React from 'react';
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  
  state = {
    options: [],
    selectedOption: undefined
  }
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((opt) => opt !== option),
    }));
  }

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNumber];
    this.setState(() => ({
      selectedOption
    }));
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
    // we don't to change the state value);
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  // lifecycle methods
  // can only be used in class-based components
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const subtitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
        <OptionModal 
            selectedOption={this.state.selectedOption} 
            handleClearSelectedOption={this.handleClearSelectedOption}/>
      </div>
    );
  }
}