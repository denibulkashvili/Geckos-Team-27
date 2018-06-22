import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

export default class SearchBar extends Component {
  state = { value: '' };

  onFormSubmit(event) {
    event.preventDefault();

    this.setState({ value: '' });
  }

  render() {
    const { buttonStyle } = styles;

    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <Input 
            placeholder="Search" 
            fullWidth 
            style={{paddingLeft: '3px'}}
            type="search" 
            onChange={event => this.setState({ value: event.target.value })}
            value={this.state.value}
          />
          <Button 
            type="submit"
            variant="contained"
            style={buttonStyle} 
          >
          Search
          </Button>
        </form>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    marginTop: '10px',
    backgroundColor: '#2196f3', 
    color: '#fff'
  }
};
