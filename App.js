import React, { Component } from 'react'
import { StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native'
import Driver from './screens/Driver'
import Passenger from './screens/Passenger'
import Login from './screens/Login'
import GenericContainer from './components/GenericContainer'
import DriverOrPassenger from './screens/DriverOrPassenger'
import SignUp from './screens/SignUp'

const DriverWithGenericContainer = GenericContainer(Driver)
const PassengerWithGenericContainer = GenericContainer(Passenger)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDriver: false,
      isPassenger: false,
      token: '',
      createAccount: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(name, value) {
    this.setState({ [name]: value })
  }

  render() {

    if (this.state.createAccount) {
      return <SignUp handleChange={this.handleChange} />
    }

    if (this.state.token === '') {
      return <Login handleChange={this.handleChange} />
    }

    if (this.state.isDriver) {
      return <DriverWithGenericContainer token={this.state.token} />
    }
    if (this.state.isPassenger) {
      return <PassengerWithGenericContainer token={this.state.token} />
    }
    return <DriverOrPassenger handleChange={this.handleChange} />
  }
}
