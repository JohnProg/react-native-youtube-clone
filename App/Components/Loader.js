'use strict';

import React, { Component } from 'react';

import {
  ActivityIndicator,
  View,
} from 'react-native';

import styles from './../Styles/loader.style'

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
