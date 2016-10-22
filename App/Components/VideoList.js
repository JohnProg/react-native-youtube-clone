const ReactNative = require('react-native');

import React from 'react';

const {
  View,
  Text,
  ListView,
  StyleSheet
 } = ReactNative;

const VideoList = ({items, onVideoSelect}) => {
   renderRow = (text, sId, rId) => {
     return (
       <Text style={ styles.row }>
         { rId }. { text }
       </Text>
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
