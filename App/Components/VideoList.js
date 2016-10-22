const ReactNative = require('react-native');

import React         from 'react';
import VideoListItem from './VideoListItem';

const {
  View,
  Text,
  ListView,
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
       style={{flex: 4}}
       renderRow={ this.renderRow } />
   )
 }

 export default VideoList;
