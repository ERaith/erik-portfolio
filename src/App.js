import React, { Component } from 'react'
import Projects from './components/Projects'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import './App.scss'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Hero/>
        <About/>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}
