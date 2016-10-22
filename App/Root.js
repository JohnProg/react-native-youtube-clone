import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View
 } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={{ width: 100 }}>Hello world</Text>
        <TextInput
           placeholder={'Search...'}
           returnKeyType={'search'}
           style={ styles.inputSearch }
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
  },
  inputSearch: {
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  }
})
