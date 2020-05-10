import React, { Component } from 'react'
import Footer from './components/Footer'
import Card from './components/Projects'
import './App.scss'
export default class App extends Component {
  render() {
    return (
      <div>
        <Card/>
        <Footer/>
      </div>
    )
  }
}
