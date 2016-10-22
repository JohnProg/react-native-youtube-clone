import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
    flexDirection: 'row',
  },
  inputSearch: {
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center'
  }
});

module.exports = styles;
