import React, { Component } from "react";
import {connect} from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import {fetchSmurfs} from './actions/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount(){
    this.props.fetch()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(fetchSmurfs)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);