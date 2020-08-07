import React, { Component } from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi_1f18516e-f93d-4a47-94a6-5c2dae09937b.png';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  state = {
    logo,
    name: 'Derek Paúl'
  }

  changeImg() {
    this.setState({
      logo: logoPlatzi,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TransitionGroup>
            <CSSTransition
              timeout={5000}
              key={this.state.logo}
              classNames="showImg"
            >
              <img src={this.state.logo} className="App-logo" alt="logo" />
            </CSSTransition>
          </TransitionGroup>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hola {this.state.name}
          </a>
          <button className="btn primary" onClick={this.changeImg.bind(this)}>Click me</button>
        </header>
      </div>
    );
  }
}

export default App;
