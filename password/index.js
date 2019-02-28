//@flow
import React, { Component } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { style } from "./style";

type Props = {
  size?: number,
  styles?: Object,
  onRef: Function,
  onSubmitEditing: Function
};

type State = {
  showPwd: boolean,
  iconName: string,
  password: string
};

export default class Password extends Component<Props, State> {
  state = {
    showPwd: true,
    iconName: "eye",
    password: ""
  };

  static defaultProps = {
    size: 30
  };

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }

  showPassword = () => {
    const { showPwd } = this.state;
    this.setState({
      showPwd: !showPwd,
      iconName: showPwd ? "eye-with-line" : "eye"
    });
  };

  render() {
    const { size, styles, ...props } = this.props;
    const { showPwd, iconName } = this.state;
    return (
      <View style={[style.div, styles]}>
        <TextInput
          {...props}
          ref={input => (this.textInput = input)}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          style={style.input}
          secureTextEntry={showPwd}
        />
        <TouchableOpacity style={style.icon} onPress={this.showPassword}>
          <Icon name={iconName} size={size} />
        </TouchableOpacity>
      </View>
    );
  }
}
