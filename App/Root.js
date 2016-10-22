import React, { Component } from 'react';

import {
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View
 } from 'react-native';

import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import Loader    from './Components/Loader';

export default class App extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const data = ['Video1', 'Video2', 'Video3', 'Video4', 'Video5'];

    this.state = {
      loading: false,
      videos: dataSource.cloneWithRows(data),
      selectedVideo: null
    };
  }

  render() {
    const { videos } = this.state;

    return (
      <View style={ styles.container }>

        <SearchBar onSubmit={this._searchData.bind(this)}/>

        <VideoList
          style={ styles.videoList }
          items={ this.state.videos }
          onVideoSelect={ selectedVideo => {
            this.setState({selectedVideo});
            alert(selectedVideo);
          } }
        />

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
  },
  videoList: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
