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
import VideoDetail from './Components/VideoDetail';
import Loader    from './Components/Loader';
import Api       from './Utils/Api'

export default class App extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      loading: false,
      videos: dataSource,
      selectedVideo: ''
    };
  }

  componentDidMount() {
    this._searchData.call(this, 'React Native');
  }

  render() {
    const { videos } = this.state;

    return (
      <View style={ styles.container }>

        <SearchBar onSubmit={this._searchData.bind(this)}/>

        <VideoDetail video={this.state.selectedVideo} loading={this.state.loading}/>

        <VideoList
          style={ styles.videoList }
          items={ this.state.videos }
          onVideoSelect={ selectedVideo => {
            this.setState({selectedVideo});
          } }
        />

        <Loader visible={this.state.loading} />

      </View>
    )
  }

  _searchData(query) {
    this.setState({loading: true});

    Api.search(query)
    .then(data => {
      this.setState({
        videos: this.state.videos.cloneWithRows(data.items),
        selectedVideo: data.items[0],
        loading: false
      });
    });
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
