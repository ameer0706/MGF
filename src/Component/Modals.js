import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;
const Modals = props => {
  CancelModal = (bool, data) => {
    props.CancelModalVisible(bool);
    props.setData(data);
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={[styles.text, {fontSize: 20}]}>Sample modal header</Text>
          <Text style={styles.text}>Sample modal description</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => CancelModal(false, 'Cancel')}>
            <Text style={[styles.text, {color: 'blue'}]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => CancelModal(false, 'Ok')}>
            <Text style={[styles.text, {color: 'blue'}]}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Modals;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color:'#00'
  },
  buttonView: {
    width: '100%',
    flexDirection: 'row',
  },
  touchableOpacity: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
