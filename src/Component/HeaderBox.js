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
import {IMAGEPATH} from '../constants/ImagePath';

export default function HeaderBox({headerTitle, onPress,titleCss,headerCss,headerIcon}) {
  return (
    <View style={[styles.topCantainer,headerCss]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image style={[styles.backIcon,headerIcon]} source={IMAGEPATH.rightManu} />
        </TouchableOpacity>
        <Text style={[styles.headerText,titleCss]}>{headerTitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 23,
    width: '89%',
  },
  topCantainer:{
    paddingHorizontal:20,
    paddingVertical:13,
  },
  backIcon:{

  }
});
