import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View
 } from 'react-native';

import SearchBar from './Components/SearchBar';
import Loader    from './Components/Loader';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }
  render() {
    return (
      <View style={ styles.container }>
        <SearchBar onSubmit={this._searchData.bind(this)}/>
        <Loader visible={this.state.loading} />
      </View>
    )
  }

  _searchData(query) {
    this.setState({loading: true});
    setTimeout(()=>this.setState({loading: false}), 3000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
  }
})
