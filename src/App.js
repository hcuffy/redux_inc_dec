import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './actions';
import Counter from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ADD & SUBTRACT</h1>
        </header>
        <Counter
        change = {this.props.change}
        handleAdd = {this.props.actions.addOne}
        handleSubtract = {this.props.actions.substractOne}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    change: state.change
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
