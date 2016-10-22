import React, { Component } from 'react';

import {
  View,
  TextInput,
 } from 'react-native';

import styles from './../Styles/searchBar.style'

export default class SearchBar extends Component {
   constructor(props) {
     super(props);

     this.state = { searchValue: '' };
   }

   render() {
     return (
       <View style={ styles.container }>
         <TextInput
           placeholder={'Search...'}
           returnKeyType={'search'}
           style={ styles.inputSearch }
           value={ this.state.searchValue }
           onSubmitEditing={this._onSubmit.bind(this)}
           onChangeText={ searchValue => this.setState({searchValue}) }
         />
       </View>
     )
   }

   _onSubmit() {
     this.props.onSubmit(this.state.searchValue)
     this.setState({searchValue: ''});
   }
 };
