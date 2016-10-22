const ReactNative = require('react-native');

import React, {Component} from 'react';

const {
  View,
  StyleSheet,
  ActivityIndicator,
  WebView
} = ReactNative;

export default class VideoDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: false
    };
  }

  render() {
    if(!this.props.video || this.props.loading) return <ActivityIndicator size={'large'} style={styles.indicator}/>

    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${this.props.video.id.videoId}` }}
          style={{alignSelf: 'stretch', flex: 1,  backgroundColor: 'black', marginVertical: 10}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },

  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
});
