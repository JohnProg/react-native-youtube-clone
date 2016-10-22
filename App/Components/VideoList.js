const ReactNative = require('react-native');

import React         from 'react';
import VideoListItem from './VideoListItem';

const {
  View,
  Text,
  ListView,
  StyleSheet
 } = ReactNative;

const VideoList = ({items, onVideoSelect}) => {
   renderRow = (video, sId, rId) => {
     return (
       <VideoListItem
         key={ rId }
         item={ video }
         onVideoSelect={ onVideoSelect }
       />
     );
   };

   return (
     <ListView dataSource={ items }
       style={styles.listView}
       renderRow={ this.renderRow } />
   )
 }

 const styles = StyleSheet.create({
   listView: {
     flex: 4
   }
 });

 export default VideoList;
