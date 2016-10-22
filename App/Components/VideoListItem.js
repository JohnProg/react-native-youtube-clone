import React, {Component} from 'react';

import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './../Styles/videoListItem.style'

const VideoListItem = ({item, onVideoSelect}) => {
  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ () => { onVideoSelect(item) } }>
      <View style={ styles.listItem }>
        <Image
          style={ styles.videoImage }
          source={ {uri: item.snippet.thumbnails.high.url} } />

        <View style={ styles.videoContainer }>
          <View style={ styles.videoIconChannelContainer }>
            <View style={ styles.videoIconChannel }>
            </View>
          </View>

          <View style={ styles.videoTextContainer }>
            <Text style={ styles.videoTitle }>
              { ((item.snippet.title).length > 37) ? (((item.snippet.title).substring(0, 37 - 3)) + '...') : item.snippet.title }
            </Text>
            <Text style={ styles.videoDescription }>
              { ((item.snippet.channelTitle).length > 30) ? (((item.snippet.channelTitle).substring(0, 30 - 3)) + '...') : item.snippet.channelTitle }
              - { item.snippet.publishedAt } ago
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default VideoListItem;
