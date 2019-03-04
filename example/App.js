/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { Password } from "react-native-password-input";

type Props = {};
export default class App extends Component<Props> {
  alert = () => {
    Alert.alert("Password submitted", "Password ok");
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ name: text })}
          style={styles.input}
          placeholder="Email"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
        />
        <Password
          onRef={ref => (this.passwordInput = ref)}
          onChangeText={text => this.setState({ password: text })}
          placeholder="Password"
          returnKeyType="go"
          onSubmitEditing={this.alert}
        />
        <TouchableOpacity
          onPress={this.alert}
          style={styles.login_forgot_pwd_view}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  loginText: {
    color: "#fa665e",
    fontSize: 15,
    lineHeight: 20
  },
  login_forgot_pwd_view: {
    marginTop: 20
  }
});
