'use strict';

import React, { Component } from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: this.props.visible }
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps
    this.setState({ visible })
  }

  _renderSpinner() {
    const { visible } = this.state

    if (!visible)
      return (
        <View />
      );

    return (
      <View style={ styles.container }>
        <ActivityIndicator
          color='white'
          size='large'
          />
      </View>
    );
  }
  render() {
    return this._renderSpinner();
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  }
});
