import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Todo from './Todo'

class App extends Component {

  render() {
    return <Todo
              user="lnuvy"
              name="cleaning"
              done="false"
              description="cleaning my room"
            ></Todo>
  }
}

export default App;
