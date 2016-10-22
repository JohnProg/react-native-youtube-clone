import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  }
});

module.exports = styles;
