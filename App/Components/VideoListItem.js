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
          source={ {uri: 'https://i.ytimg.com/vi/lic0oCDMfwk/hqdefault.jpg'} } />

        <View style={ styles.videoContainer }>
          <View style={ styles.videoIconChannelContainer }>
            <View style={ styles.videoIconChannel }>
            </View>
          </View>

          <View style={ styles.videoTextContainer }>
            <Text style={ styles.videoTitle }>
              {item}
            </Text>
            <Text style={ styles.videoDescription }>
              {item} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default VideoListItem;
