
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';


class App extends Component{
  state={
    values:[]
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values/')
    .then((response) => {
      console.log(response)
      this.setState({
        values :response.data
      })
    })
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
        <ul>
          {this.state.values.map((value:any) =>(
            <li key={value.id}>{value.name}</li>
          ))}
        </ul>
        </header>
      </div>
    );
  }
} 

export default App;
