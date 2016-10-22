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
   renderRow = (text, sId, rId) => {
     return (
       <VideoListItem
         key={ rId }
         item={ text }
         onVideoSelect={ onVideoSelect }
       />
     );
   };

   return (
     <ListView dataSource={ items }
       style={styles.listView}
       contentContainerStyle={styles.contentContainerStyle}
       renderRow={ this.renderRow } />
   )
 }

 const styles = StyleSheet.create({
   listView: {
     flex: 4
   },
   contentContainerStyle: {
     justifyContent: 'center'
   }
 });

 export default VideoList;
