import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants/ColorPath';
import LinearGradient from 'react-native-linear-gradient';

export default function ButtonBox({onPress, text}) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#B6984A', '#E4C863', '#B6984A']}
          style={styles.linearGradient}>
          <Text style={styles.signInText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  signInText: {
    color: COLORS.black,
    fontSize: 17,
    fontWeight: '500',
  },
  linearGradient: {
    height: 45,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
